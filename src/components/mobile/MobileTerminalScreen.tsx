'use client';

import { TerminalWindow } from '@/components/macos/windows/TerminalWindow';
import { WindowControls } from '@/components/macos/windows/WindowControls';

export function MobileTerminalScreen() {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#0c0e15] pt-[env(safe-area-inset-top)]">
      <header className="flex h-9 shrink-0 items-center gap-3 border-b border-white/5 bg-gradient-to-b from-white/[0.06] to-white/[0.02] px-3">
        <WindowControls onClose={() => undefined} />
        <h2 className="pointer-events-none absolute inset-x-0 text-center text-[12px] font-medium text-white/70 select-none">
          Terminal — pablo@portfolio
        </h2>
      </header>
      <div className="flex-1 overflow-hidden">
        <TerminalWindow />
      </div>
    </div>
  );
}
