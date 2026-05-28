import type { HeroAction } from './machine';

export const heroActions = {
  submitLogin: (): HeroAction => ({ type: 'SUBMIT_LOGIN' }),
  unlockDone: (): HeroAction => ({ type: 'UNLOCK_DONE' }),
  openTerminalAuto: (): HeroAction => ({ type: 'OPEN_TERMINAL_AUTO' }),
  typingDone: (): HeroAction => ({ type: 'TYPING_DONE' }),
  openProjects: (): HeroAction => ({ type: 'OPEN_PROJECTS' }),
  skipIntro: (): HeroAction => ({ type: 'SKIP_INTRO' }),
  returnToDesktop: (): HeroAction => ({ type: 'RETURN_TO_DESKTOP' }),
};

export type HeroActions = typeof heroActions;
