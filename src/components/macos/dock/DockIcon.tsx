'use client';

import {
  AnimatePresence,
  motion,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { useRef, useState, type ComponentType } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type DockIconProps = {
  label: string;
  description: string;
  Icon: ComponentType;
  cursorX: MotionValue<number>;
  active?: boolean;
  onClick: () => void;
};

const BASE_SIZE = 52;
const SPREAD = 140;
const MAX_SCALE = 1.55;

export function DockIcon({
  label,
  description,
  Icon,
  cursorX,
  active,
  onClick,
}: DockIconProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(cursorX, (x) => {
    if (!ref.current) return SPREAD * 2;
    const bounds = ref.current.getBoundingClientRect();
    return x - (bounds.left + bounds.width / 2);
  });

  const rawScale = useTransform(distance, [-SPREAD, 0, SPREAD], [1, MAX_SCALE, 1], {
    clamp: true,
  });
  const scale = useSpring(rawScale, { stiffness: 240, damping: 18, mass: 0.6 });

  const tooltipLift = useTransform(scale, (s) => -(s - 1) * BASE_SIZE);

  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      aria-label={`${label} — ${description}`}
      className="group relative flex items-end justify-center focus-visible:outline-none"
      style={{ width: BASE_SIZE, height: BASE_SIZE }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            key="tip"
            className="pointer-events-none absolute bottom-full left-1/2 mb-3 whitespace-nowrap"
            style={{ x: '-50%', y: reduced ? 0 : tooltipLift }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.14, ease: 'easeOut' }}
            role="tooltip"
          >
            <span className="relative block rounded-md border border-neutral-300 bg-neutral-100 px-2.5 py-[5px] text-[11px] text-black shadow-[0_8px_20px_-6px_rgb(0_0_0_/_0.35)]">
              <span className="font-semibold">{label}</span>
              <span className="ml-1 text-neutral-500">· {description}</span>
              <span
                aria-hidden
                className="absolute bottom-0 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 translate-y-1/2 rotate-45 border-r border-b border-neutral-300 bg-neutral-100"
              />
            </span>
          </motion.span>
        )}
      </AnimatePresence>

      <motion.span
        className="relative block origin-bottom transition-shadow group-focus-visible:ring-2 group-focus-visible:ring-white/70 group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-black"
        style={{
          width: BASE_SIZE,
          height: BASE_SIZE,
          scale: reduced ? 1 : scale,
          filter: 'drop-shadow(0 8px 16px rgb(0 0 0 / 0.35))',
        }}
      >
        <Icon />
      </motion.span>

      <span
        aria-hidden
        className={`absolute -bottom-2 h-1 w-1 rounded-full bg-white transition-opacity ${
          active ? 'opacity-90' : 'opacity-0'
        }`}
      />
    </button>
  );
}
