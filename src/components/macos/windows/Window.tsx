'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useId, type ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { WindowControls } from './WindowControls';

type Position = { x: number; y: number } | 'center';

type WindowProps = {
  title: string;
  isOpen: boolean;
  zIndex: number;
  onClose: () => void;
  onFocus: () => void;
  position?: Position;
  width?: number | string;
  height?: number | string;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
};

export function Window({
  title,
  isOpen,
  zIndex,
  onClose,
  onFocus,
  position = 'center',
  width = 760,
  height,
  className = '',
  bodyClassName = '',
  children,
}: WindowProps) {
  const reduced = useReducedMotion();
  const titleId = useId();

  const positionStyle =
    position === 'center'
      ? { left: '50%', top: '50%', translate: '-50% -50%' }
      : { left: position.x, top: position.y };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-labelledby={titleId}
          aria-modal={false}
          tabIndex={-1}
          onMouseDown={onFocus}
          onFocus={onFocus}
          initial={reduced ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
          transition={{ duration: reduced ? 0 : 0.22, ease: [0.22, 0.61, 0.36, 1] }}
          className={`pointer-events-auto absolute flex max-h-[80vh] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#1a1d27]/95 text-white shadow-[0_30px_60px_-15px_rgb(0_0_0_/_0.6),_0_0_0_1px_rgb(255_255_255_/_0.05)] backdrop-blur-xl ${className}`}
          style={{
            zIndex,
            width,
            height,
            ...positionStyle,
          }}
        >
          <header className="group flex h-9 shrink-0 items-center gap-3 border-b border-white/5 bg-gradient-to-b from-white/[0.06] to-white/[0.02] px-3">
            <WindowControls onClose={onClose} />
            <h2
              id={titleId}
              className="pointer-events-none absolute inset-x-0 text-center text-[13px] font-medium text-white/70 select-none"
            >
              {title}
            </h2>
          </header>
          <div className={`flex-1 overflow-auto ${bodyClassName}`}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
