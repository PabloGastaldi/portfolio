'use client';

import { useContext } from 'react';
import {
  WindowManagerContext,
  type WindowManagerValue,
} from '@/components/macos/windows/WindowManagerProvider';

export function useWindowManager(): WindowManagerValue {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) {
    throw new Error('useWindowManager must be used inside <WindowManagerProvider>');
  }
  return ctx;
}
