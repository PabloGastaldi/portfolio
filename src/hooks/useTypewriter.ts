'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { TerminalScript } from '@/data/terminal';

type Atom =
  | { type: 'instant'; text: string }
  | { type: 'typed'; text: string; baseMs: number; jitter: number }
  | { type: 'pause'; ms: number };

const COMMAND_BASE_MS = 48;
const COMMAND_JITTER_MS = 32;
const OUTPUT_BASE_MS = 11;
const OUTPUT_JITTER_MS = 5;
const COMMAND_TO_OUTPUT_PAUSE_MS = 180;

function buildAtoms(script: TerminalScript): Atom[] {
  const atoms: Atom[] = [];
  for (const seq of script.sequences) {
    atoms.push({ type: 'instant', text: `${script.prompt} ` });
    atoms.push({
      type: 'typed',
      text: seq.command,
      baseMs: COMMAND_BASE_MS,
      jitter: COMMAND_JITTER_MS,
    });
    atoms.push({ type: 'instant', text: '\n' });
    atoms.push({ type: 'pause', ms: COMMAND_TO_OUTPUT_PAUSE_MS });
    atoms.push({
      type: 'typed',
      text: `${seq.output}\n`,
      baseMs: OUTPUT_BASE_MS,
      jitter: OUTPUT_JITTER_MS,
    });
    atoms.push({ type: 'instant', text: '\n' });
  }
  atoms.push({ type: 'instant', text: `${script.prompt} ` });
  return atoms;
}

function fullTextOf(atoms: Atom[]): string {
  return atoms.filter((a) => a.type !== 'pause').map((a) => a.text).join('');
}

type TypewriterResult = {
  text: string;
  done: boolean;
};

export function useTypewriter(
  script: TerminalScript,
  active: boolean,
  reduced: boolean,
  onComplete: () => void,
): TypewriterResult {
  const atoms = useMemo(() => buildAtoms(script), [script]);
  const fullText = useMemo(() => fullTextOf(atoms), [atoms]);

  const [text, setText] = useState(reduced && active ? fullText : '');
  const [done, setDone] = useState(reduced && active);

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (!active) {
      setText('');
      setDone(false);
      return;
    }

    if (reduced) {
      setText(fullText);
      setDone(true);
      onCompleteRef.current();
      return;
    }

    let cancelled = false;
    let timeoutId: number | null = null;
    let accumulated = '';

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timeoutId = window.setTimeout(resolve, ms);
      });

    const run = async () => {
      for (const atom of atoms) {
        if (cancelled) return;
        if (atom.type === 'instant') {
          accumulated += atom.text;
          setText(accumulated);
        } else if (atom.type === 'pause') {
          await wait(atom.ms);
        } else {
          for (const char of atom.text) {
            if (cancelled) return;
            accumulated += char;
            setText(accumulated);
            const delay = Math.max(
              4,
              atom.baseMs + (Math.random() - 0.5) * atom.jitter,
            );
            await wait(delay);
          }
        }
      }
      if (!cancelled) {
        setDone(true);
        onCompleteRef.current();
      }
    };

    run();

    return () => {
      cancelled = true;
      if (timeoutId !== null) window.clearTimeout(timeoutId);
    };
  }, [active, reduced, atoms, fullText]);

  return { text, done };
}
