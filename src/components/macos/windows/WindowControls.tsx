'use client';

type WindowControlsProps = {
  onClose: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
};

export function WindowControls({
  onClose,
  onMinimize,
  onMaximize,
}: WindowControlsProps) {
  return (
    <div className="group flex items-center gap-2" aria-hidden={false}>
      <ControlButton
        color="bg-[#ff6f63] hover:bg-[#ff5247]"
        label="Cerrar ventana"
        onClick={onClose}
      >
        <CloseGlyph />
      </ControlButton>
      <ControlButton
        color="bg-[#f5c452] hover:bg-[#f0b537]"
        label="Minimizar ventana"
        onClick={onMinimize}
      >
        <MinimizeGlyph />
      </ControlButton>
      <ControlButton
        color="bg-[#69c970] hover:bg-[#52b85d]"
        label="Maximizar ventana"
        onClick={onMaximize}
      >
        <MaximizeGlyph />
      </ControlButton>
    </div>
  );
}

function ControlButton({
  color,
  label,
  onClick,
  children,
}: {
  color: string;
  label: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`relative flex h-3 w-3 items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none ${color}`}
    >
      <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
        {children}
      </span>
    </button>
  );
}

function CloseGlyph() {
  return (
    <svg viewBox="0 0 8 8" className="h-2 w-2 text-black/70" aria-hidden>
      <path
        d="M1.5 1.5 L6.5 6.5 M6.5 1.5 L1.5 6.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MinimizeGlyph() {
  return (
    <svg viewBox="0 0 8 8" className="h-2 w-2 text-black/70" aria-hidden>
      <path d="M1.5 4 L6.5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function MaximizeGlyph() {
  return (
    <svg viewBox="0 0 8 8" className="h-2 w-2 text-black/70" aria-hidden>
      <path
        d="M2 2 L6 6 M2 6 L6 2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
