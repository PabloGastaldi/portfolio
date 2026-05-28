'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { useHero } from '@/hooks/useHero';
import { useIsMobile } from '@/hooks/useIsMobile';
import { LoginScreen } from './LoginScreen';
import { DesktopScreen } from './DesktopScreen';
import { ProjectsTransition } from './ProjectsTransition';
import { SkipIntroButton } from './SkipIntroButton';
import { WindowManagerProvider } from './windows/WindowManagerProvider';
import { MobileTerminalScreen } from '@/components/mobile/MobileTerminalScreen';

const CUT_DURATION_MS = 220;

export function HeroExperience() {
  const { state, reducedMotion } = useHero();
  const isMobile = useIsMobile();
  const [transitionDone, setTransitionDone] = useState(false);
  const isProjects = state.phase === 'PROJECTS_OPEN';
  const isCut = isProjects && (state.entryMode === 'cut' || isMobile);
  const isStaged = isProjects && state.entryMode === 'staged' && !isMobile;

  useEffect(() => {
    if (!isProjects) {
      setTransitionDone(false);
      return;
    }
    if (reducedMotion) {
      setTransitionDone(true);
      return;
    }
    if (isCut) {
      const id = window.setTimeout(() => setTransitionDone(true), CUT_DURATION_MS);
      return () => window.clearTimeout(id);
    }
  }, [isProjects, isCut, reducedMotion]);

  const onStagedDone = useCallback(() => setTransitionDone(true), []);

  const showOverlay = !isProjects || !transitionDone;
  const lockScroll = showOverlay;

  useEffect(() => {
    if (!lockScroll) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [lockScroll]);

  const showLogin = state.phase === 'LOGIN' || state.phase === 'UNLOCKING';
  const showTerminalPhase =
    state.phase === 'UNLOCKING' ||
    state.phase === 'DESKTOP' ||
    state.phase === 'TERMINAL_TYPING' ||
    state.phase === 'TERMINAL_READY';

  return (
    <WindowManagerProvider>
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="hero"
            className="fixed inset-0 z-[60] isolate bg-[hsl(240_5%_8%)]"
            role="region"
            aria-label="Pantalla de bienvenida"
            initial={{ opacity: 1 }}
            animate={{ opacity: isCut ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.25, ease: 'easeOut' }}
          >
            {!isMobile && (showTerminalPhase || isStaged) && (
              <DesktopScreen fadingOut={isStaged} />
            )}

            {isMobile && showTerminalPhase && <MobileTerminalScreen />}

            {showLogin && <LoginScreen />}

            {isStaged && <ProjectsTransition onDone={onStagedDone} />}

            {!isProjects && <SkipIntroButton />}
          </motion.div>
        )}
      </AnimatePresence>
    </WindowManagerProvider>
  );
}
