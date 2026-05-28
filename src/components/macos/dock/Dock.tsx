'use client';

import { useMotionValue } from 'framer-motion';
import { useHero } from '@/hooks/useHero';
import { useWindowManager } from '@/hooks/useWindowManager';
import { dockItems, type DockAction } from '@/data/dock';
import { DockIcon } from './DockIcon';

export function Dock() {
  const cursorX = useMotionValue<number>(Number.POSITIVE_INFINITY);
  const wm = useWindowManager();
  const { openProjects } = useHero();

  function handleAction(action: DockAction) {
    switch (action.type) {
      case 'open-window':
        wm.openWindow(action.window);
        return;
      case 'open-projects':
        openProjects();
        return;
      case 'external':
        window.open(action.href, '_blank', 'noopener,noreferrer');
        return;
    }
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-3 z-20 flex justify-center">
      <div
        className="pointer-events-auto flex items-end gap-6 rounded-2xl border border-white/15 bg-white/10 px-5 pt-3 pb-3 backdrop-blur-2xl"
        onMouseMove={(event) => cursorX.set(event.clientX)}
        onMouseLeave={() => cursorX.set(Number.POSITIVE_INFINITY)}
        role="toolbar"
        aria-label="Dock de aplicaciones"
      >
        {dockItems.map((item) => {
          const active =
            item.action.type === 'open-window' && wm.isOpen(item.action.window);
          return (
            <DockIcon
              key={item.id}
              label={item.label}
              description={item.description}
              Icon={item.Icon}
              cursorX={cursorX}
              active={active}
              onClick={() => handleAction(item.action)}
            />
          );
        })}
      </div>
    </div>
  );
}
