'use client';

import { motion } from 'framer-motion';
import { useCallback, useRef, useEffect } from 'react';
import { useHero } from '@/hooks/useHero';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useTypewriter } from '@/hooks/useTypewriter';
import { terminalScript } from '@/data/terminal';

export function TerminalWindow() {
  const { state, reducedMotion, notifyTypingDone, openProjects } = useHero();
  const isMobile = useIsMobile();
  const hintText = isMobile ? terminalScript.hintMobile : terminalScript.hint;
  const active = state.phase === 'TERMINAL_TYPING' || state.phase === 'TERMINAL_READY';
  const isReady = state.phase === 'TERMINAL_READY';

  const onComplete = useCallback(() => {
    notifyTypingDone();
  }, [notifyTypingDone]);

  const { text } = useTypewriter(terminalScript, active, reducedMotion, onComplete);

  const scrollerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
    }
  }, [text]);

  const fullScriptText = terminalScript.sequences
    .map((seq) => `${terminalScript.prompt} ${seq.command}\n${seq.output}`)
    .join('\n\n');

  return (
    <div
      ref={scrollerRef}
      className="h-full overflow-auto bg-[#0c0e15] px-5 py-4 font-mono text-[13px] leading-relaxed text-[#d6e0f0]"
    >
      <pre aria-hidden="true" className="m-0 font-mono whitespace-pre-wrap">
        {text}
        {!isReady && (
          <motion.span
            aria-hidden
            className="ml-[1px] inline-block h-[1em] w-[0.5em] translate-y-[2px] bg-[#d6e0f0] align-middle"
            animate={reducedMotion ? { opacity: 1 } : { opacity: [1, 1, 0, 0] }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 1.0, repeat: Infinity, times: [0, 0.5, 0.5, 1], ease: 'linear' }
            }
          />
        )}
      </pre>

      {isReady && (
        <p className="sr-only" role="status" aria-live="polite">
          {fullScriptText}
        </p>
      )}

      {isReady && (
        <button
          type="button"
          onClick={openProjects}
          className="mt-3 block rounded px-1 text-left font-mono text-[13px] text-[#7ee787] transition-colors hover:text-[#a3f3b0] focus-visible:ring-2 focus-visible:ring-[#7ee787] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0e15] focus-visible:outline-none"
          aria-label="Abrir ventana de proyectos"
        >
          <motion.span
            className="inline-block"
            initial={reducedMotion ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.4, ease: 'easeOut' }}
          >
            {hintText}
          </motion.span>
        </button>
      )}
    </div>
  );
}
