'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useHero } from '@/hooks/useHero';
import { useWindowManager } from '@/hooks/useWindowManager';
import { MeshGradient } from './effects/MeshGradient';
import { Grain } from './effects/Grain';
import { MenuBar } from './MenuBar';
import { Dock } from './dock/Dock';
import { Window } from './windows/Window';
import { ContactWindow } from './windows/ContactWindow';
import { TerminalWindow } from './windows/TerminalWindow';
import { CvWindow } from './windows/CvWindow';
import { StickyNote } from './StickyNote';

type DesktopScreenProps = {
  fadingOut?: boolean;
};

export function DesktopScreen({ fadingOut = false }: DesktopScreenProps) {
  const { state, reducedMotion } = useHero();
  const wm = useWindowManager();

  useEffect(() => {
    if (state.phase === 'TERMINAL_TYPING' && !wm.isOpen('terminal')) {
      wm.openWindow('terminal');
    }
  }, [state.phase, wm]);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadingOut ? 0 : 1 }}
      transition={{ duration: reducedMotion ? 0 : 0.5, ease: 'easeOut' }}
    >
      <MeshGradient />
      <Grain />
      <MenuBar />
      <StickyNote />

      <div className="pointer-events-none absolute inset-0 pt-7 pb-24">
        <Window
          title="Terminal — pablo@portfolio"
          isOpen={wm.isOpen('terminal')}
          zIndex={wm.getZ('terminal')}
          onClose={() => wm.closeWindow('terminal')}
          onFocus={() => wm.focusWindow('terminal')}
          width={720}
          height={420}
          bodyClassName="bg-[#0c0e15]"
        >
          <TerminalWindow />
        </Window>

        <Window
          title="CV — Pablo Gastaldi.pdf"
          isOpen={wm.isOpen('cv')}
          zIndex={wm.getZ('cv')}
          onClose={() => wm.closeWindow('cv')}
          onFocus={() => wm.focusWindow('cv')}
          width={760}
          height={560}
          bodyClassName="bg-neutral-900"
        >
          <CvWindow />
        </Window>

        <Window
          title="Nuevo mensaje"
          isOpen={wm.isOpen('contact')}
          zIndex={wm.getZ('contact')}
          onClose={() => wm.closeWindow('contact')}
          onFocus={() => wm.focusWindow('contact')}
          width={560}
          height={460}
        >
          <ContactWindow />
        </Window>
      </div>

      <Dock />
    </motion.div>
  );
}
