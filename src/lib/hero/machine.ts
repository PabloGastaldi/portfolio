export type HeroPhase =
  | 'LOGIN'
  | 'UNLOCKING'
  | 'DESKTOP'
  | 'TERMINAL_TYPING'
  | 'TERMINAL_READY'
  | 'PROJECTS_OPEN';

export type EntryMode = 'staged' | 'cut';

export type HeroState = {
  phase: HeroPhase;
  entryMode: EntryMode | null;
};

export type HeroAction =
  | { type: 'SUBMIT_LOGIN' }
  | { type: 'UNLOCK_DONE' }
  | { type: 'OPEN_TERMINAL_AUTO' }
  | { type: 'TYPING_DONE' }
  | { type: 'OPEN_PROJECTS' }
  | { type: 'SKIP_INTRO' }
  | { type: 'RETURN_TO_DESKTOP' };

export const initialHeroState: HeroState = {
  phase: 'LOGIN',
  entryMode: null,
};

export function heroReducer(state: HeroState, action: HeroAction): HeroState {
  switch (action.type) {
    case 'SKIP_INTRO':
      return state.phase === 'PROJECTS_OPEN'
        ? state
        : { phase: 'PROJECTS_OPEN', entryMode: 'cut' };

    case 'OPEN_PROJECTS':
      return state.phase === 'TERMINAL_READY' || state.phase === 'TERMINAL_TYPING'
        ? { phase: 'PROJECTS_OPEN', entryMode: 'staged' }
        : state;

    case 'RETURN_TO_DESKTOP':
      return state.phase === 'PROJECTS_OPEN'
        ? { phase: 'TERMINAL_READY', entryMode: null }
        : state;

    case 'SUBMIT_LOGIN':
      return state.phase === 'LOGIN'
        ? { phase: 'UNLOCKING', entryMode: null }
        : state;

    case 'UNLOCK_DONE':
      return state.phase === 'UNLOCKING'
        ? { phase: 'DESKTOP', entryMode: null }
        : state;

    case 'OPEN_TERMINAL_AUTO':
      return state.phase === 'DESKTOP'
        ? { phase: 'TERMINAL_TYPING', entryMode: null }
        : state;

    case 'TYPING_DONE':
      return state.phase === 'TERMINAL_TYPING'
        ? { phase: 'TERMINAL_READY', entryMode: null }
        : state;

    default: {
      action satisfies never;
      return state;
    }
  }
}

export const isHeroActive = (phase: HeroPhase) => phase !== 'PROJECTS_OPEN';
