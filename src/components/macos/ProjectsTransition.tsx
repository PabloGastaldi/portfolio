'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useHero } from '@/hooks/useHero';
import { WindowControls } from './windows/WindowControls';
import { ProjectsWindow } from './windows/ProjectsWindow';

type Stage = 'opening' | 'expanding';

type ProjectsTransitionProps = {
  onDone: () => void;
};

export function ProjectsTransition({ onDone }: ProjectsTransitionProps) {
  const { reducedMotion } = useHero();
  const [stage, setStage] = useState<Stage>('opening');

  useEffect(() => {
    if (reducedMotion) {
      onDone();
      return;
    }
    const toExpand = window.setTimeout(() => setStage('expanding'), 400);
    const finish = window.setTimeout(onDone, 1100);
    return () => {
      window.clearTimeout(toExpand);
      window.clearTimeout(finish);
    };
  }, [reducedMotion, onDone]);

  if (reducedMotion) return null;

  const expanding = stage === 'expanding';

  return (
    <>
      <motion.div
        aria-hidden
        className="absolute inset-0 z-30 bg-black/35 backdrop-blur-[2px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: expanding ? 0 : 1 }}
        transition={{ duration: expanding ? 0.4 : 0.3, ease: 'easeOut' }}
      />

      <motion.div
        className="absolute z-40 overflow-hidden bg-background text-foreground shadow-[0_30px_60px_-15px_rgb(0_0_0_/_0.6),_0_0_0_1px_rgb(255_255_255_/_0.06)]"
        initial={{
          opacity: 0,
          scale: 0.92,
          top: '7vh',
          left: '6vw',
          width: '88vw',
          height: '86vh',
          borderRadius: 12,
        }}
        animate={
          expanding
            ? {
                opacity: 1,
                scale: 1,
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                borderRadius: 0,
              }
            : {
                opacity: 1,
                scale: 1,
                top: '7vh',
                left: '6vw',
                width: '88vw',
                height: '86vh',
                borderRadius: 12,
              }
        }
        transition={{ duration: expanding ? 0.7 : 0.4, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <motion.header
          className="absolute inset-x-0 top-0 z-10 flex h-9 items-center gap-3 border-b border-black/5 bg-gradient-to-b from-black/[0.04] to-transparent px-3"
          initial={{ opacity: 1 }}
          animate={{ opacity: expanding ? 0 : 1 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          <WindowControls onClose={() => undefined} />
          <h2 className="pointer-events-none absolute inset-x-0 text-center text-[13px] font-medium text-foreground/70 select-none">
            Proyectos
          </h2>
        </motion.header>

        <motion.div
          className="absolute inset-0"
          initial={{ paddingTop: 36 }}
          animate={{ paddingTop: expanding ? 0 : 36 }}
          transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <ProjectsWindow />
        </motion.div>
      </motion.div>
    </>
  );
}
