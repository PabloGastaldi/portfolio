'use client';

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { heroActions, type HeroActions } from './actions';
import {
  heroReducer,
  initialHeroState,
  isHeroActive,
  type HeroState,
} from './machine';

const UNLOCK_DURATION_MS = 450;
const DESKTOP_TO_TERMINAL_DELAY_MS = 350;

type DispatchAction = ReturnType<HeroActions[keyof HeroActions]>;

export type HeroContextValue = {
  state: HeroState;
  reducedMotion: boolean;
  dispatch: (action: DispatchAction) => void;
  submitLogin: () => void;
  openProjects: () => void;
  skipIntro: () => void;
  returnToDesktop: () => void;
  notifyTypingDone: () => void;
};

export const HeroContext = createContext<HeroContextValue | null>(null);

export function HeroProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();
  const [state, dispatch] = useReducer(heroReducer, initialHeroState);

  useEffect(() => {
    if (state.phase !== 'UNLOCKING') return;
    const delay = reducedMotion ? 0 : UNLOCK_DURATION_MS;
    const id = window.setTimeout(() => dispatch(heroActions.unlockDone()), delay);
    return () => window.clearTimeout(id);
  }, [state.phase, reducedMotion]);

  useEffect(() => {
    if (state.phase !== 'DESKTOP') return;
    const delay = reducedMotion ? 0 : DESKTOP_TO_TERMINAL_DELAY_MS;
    const id = window.setTimeout(() => dispatch(heroActions.openTerminalAuto()), delay);
    return () => window.clearTimeout(id);
  }, [state.phase, reducedMotion]);

  useEffect(() => {
    if (!isHeroActive(state.phase)) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return;

      const target = event.target as HTMLElement | null;
      const isEditable =
        target?.tagName === 'INPUT' ||
        target?.tagName === 'TEXTAREA' ||
        target?.isContentEditable === true;

      if (event.key === 'Escape') {
        event.preventDefault();
        dispatch(heroActions.skipIntro());
        return;
      }

      if (event.key === 'Enter' && !isEditable) {
        if (state.phase === 'LOGIN') {
          event.preventDefault();
          dispatch(heroActions.submitLogin());
        } else if (state.phase === 'TERMINAL_READY') {
          event.preventDefault();
          dispatch(heroActions.openProjects());
        }
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [state.phase]);

  const submitLogin = useCallback(() => dispatch(heroActions.submitLogin()), []);
  const openProjects = useCallback(() => dispatch(heroActions.openProjects()), []);
  const skipIntro = useCallback(() => dispatch(heroActions.skipIntro()), []);
  const returnToDesktop = useCallback(
    () => dispatch(heroActions.returnToDesktop()),
    [],
  );
  const notifyTypingDone = useCallback(
    () => dispatch(heroActions.typingDone()),
    [],
  );

  const value = useMemo<HeroContextValue>(
    () => ({
      state,
      reducedMotion,
      dispatch,
      submitLogin,
      openProjects,
      skipIntro,
      returnToDesktop,
      notifyTypingDone,
    }),
    [
      state,
      reducedMotion,
      submitLogin,
      openProjects,
      skipIntro,
      returnToDesktop,
      notifyTypingDone,
    ],
  );

  return <HeroContext.Provider value={value}>{children}</HeroContext.Provider>;
}
