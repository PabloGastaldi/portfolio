'use client';

import { useContext } from 'react';
import { HeroContext, type HeroContextValue } from '@/lib/hero/HeroProvider';

export function useHero(): HeroContextValue {
  const ctx = useContext(HeroContext);
  if (!ctx) {
    throw new Error('useHero must be used inside <HeroProvider>');
  }
  return ctx;
}
