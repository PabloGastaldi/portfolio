'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { stickyNote } from '@/data/desktop';

export function StickyNote() {
  const reducedMotion = useReducedMotion();
  const [bounds, setBounds] = useState<{ top: number; left: number; right: number; bottom: number } | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const compute = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setBounds({
        top: -rect.top + 28,
        left: -rect.left + 8,
        right: window.innerWidth - rect.right - 8,
        bottom: window.innerHeight - rect.bottom - 100,
      });
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  return (
    <motion.div
      ref={ref}
      className="pointer-events-auto absolute top-16 right-10 z-10 w-52 cursor-grab rounded-[3px] bg-[hsl(48_92%_80%)] px-4 py-3 text-[hsl(35_70%_20%)] shadow-[0_2px_2px_rgb(0_0_0_/_0.05),_0_12px_30px_-12px_rgb(0_0_0_/_0.45)] select-none active:cursor-grabbing"
      style={{ rotate: -5 }}
      drag
      dragMomentum={false}
      dragElastic={0.08}
      dragConstraints={bounds ?? false}
      whileHover={reducedMotion ? undefined : { rotate: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      role="note"
      aria-label="Nota adhesiva"
    >
      <p className="text-[13px] leading-snug font-medium">{stickyNote.text}</p>
      {stickyNote.signature && (
        <p className="mt-2 text-right text-[13px] font-semibold">{stickyNote.signature}</p>
      )}
    </motion.div>
  );
}
