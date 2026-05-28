'use client';

import {
  createContext,
  useCallback,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';

export type WindowId = 'terminal' | 'cv' | 'contact';

type WindowState = { open: boolean; z: number };

export type WindowManagerValue = {
  windows: Record<WindowId, WindowState>;
  openWindow: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  isOpen: (id: WindowId) => boolean;
  getZ: (id: WindowId) => number;
};

const INITIAL: Record<WindowId, WindowState> = {
  terminal: { open: false, z: 0 },
  cv: { open: false, z: 0 },
  contact: { open: false, z: 0 },
};

export const WindowManagerContext = createContext<WindowManagerValue | null>(null);

export function WindowManagerProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<Record<WindowId, WindowState>>(INITIAL);
  const topZRef = useRef(0);

  const focusWindow = useCallback((id: WindowId) => {
    topZRef.current += 1;
    const z = topZRef.current;
    setWindows((prev) => ({ ...prev, [id]: { ...prev[id], z } }));
  }, []);

  const openWindow = useCallback((id: WindowId) => {
    topZRef.current += 1;
    const z = topZRef.current;
    setWindows((prev) => ({ ...prev, [id]: { open: true, z } }));
  }, []);

  const closeWindow = useCallback((id: WindowId) => {
    setWindows((prev) => ({ ...prev, [id]: { ...prev[id], open: false } }));
  }, []);

  const value = useMemo<WindowManagerValue>(
    () => ({
      windows,
      openWindow,
      closeWindow,
      focusWindow,
      isOpen: (id) => windows[id].open,
      getZ: (id) => windows[id].z,
    }),
    [windows, openWindow, closeWindow, focusWindow],
  );

  return (
    <WindowManagerContext.Provider value={value}>
      {children}
    </WindowManagerContext.Provider>
  );
}
