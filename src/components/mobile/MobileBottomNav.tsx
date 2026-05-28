'use client';

import { useEffect, useState } from 'react';
import { mobileNavItems, type MobileNavTarget } from '@/data/mobile-nav';

const SECTION_IDS = mobileNavItems
  .filter((item) => item.target.type === 'scroll')
  .map((item) => (item.target as { sectionId: string }).sectionId);

export function MobileBottomNav() {
  const [activeId, setActiveId] = useState<string>('intro');

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function handleTarget(target: MobileNavTarget) {
    if (target.type === 'scroll') {
      const el = document.getElementById(target.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }
    window.open(target.href, '_blank', 'noopener,noreferrer');
  }

  return (
    <nav
      aria-label="Navegación móvil"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <ul className="flex items-stretch justify-around">
        {mobileNavItems.map((item) => {
          const isActive =
            item.target.type === 'scroll' && activeId === item.target.sectionId;
          return (
            <li key={item.id} className="flex-1">
              <button
                type="button"
                onClick={() => handleTarget(item.target)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex min-h-[56px] w-full flex-col items-center justify-center gap-1 px-2 py-2 text-[11px] font-medium transition-colors focus-visible:bg-muted focus-visible:outline-none ${
                  isActive ? 'text-foreground' : 'text-foreground/55'
                }`}
              >
                <item.Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
