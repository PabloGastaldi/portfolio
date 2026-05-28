'use client';

import { motion, type Variants } from 'framer-motion';
import { useHero } from '@/hooks/useHero';
import { profile } from '@/data/profile';
import { MeshGradient } from './effects/MeshGradient';
import { Grain } from './effects/Grain';
import { MenuBar } from './MenuBar';
import { ProfileAvatar } from './ProfileAvatar';

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const flat: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export function LoginScreen() {
  const { submitLogin, reducedMotion, state } = useHero();
  const unlocking = state.phase === 'UNLOCKING';
  const variants = reducedMotion ? flat : item;

  return (
    <motion.div
      className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden text-white"
      initial={reducedMotion ? false : { opacity: 1 }}
      animate={unlocking ? { opacity: 0, scale: 1.02 } : { opacity: 1, scale: 1 }}
      transition={{ duration: reducedMotion ? 0 : 0.5, ease: 'easeOut' }}
    >
      <MeshGradient />
      <Grain />
      <MenuBar />

      <motion.div
        variants={reducedMotion ? undefined : container}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-7 px-6 text-center"
      >
        <motion.div variants={variants}>
          <ProfileAvatar size={132} initials="PG" />
        </motion.div>

        <motion.h1
          variants={variants}
          className="text-[28px] leading-tight font-semibold tracking-tight"
        >
          {profile.name}
        </motion.h1>

        <motion.button
          variants={variants}
          type="button"
          onClick={submitLogin}
          disabled={unlocking}
          className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/10 py-2.5 pr-3 pl-5 text-sm font-medium text-white shadow-lg shadow-black/40 backdrop-blur-md transition-all hover:border-white/35 hover:bg-white/15 hover:shadow-black/50 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none disabled:opacity-60"
          aria-label="Entrar al portfolio"
        >
          <span className="opacity-90 group-hover:opacity-100">Entrar</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:translate-x-0.5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
              aria-hidden
            >
              <path d="m9 6 6 6-6 6" />
            </svg>
          </span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
