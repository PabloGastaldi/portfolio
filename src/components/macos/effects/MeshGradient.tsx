export function MeshGradient() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10"
      style={{
        background:
          'radial-gradient(at 18% 22%, hsl(258 65% 32% / 0.85), transparent 55%),' +
          'radial-gradient(at 82% 18%, hsl(196 70% 28% / 0.7), transparent 50%),' +
          'radial-gradient(at 72% 88%, hsl(326 60% 28% / 0.6), transparent 55%),' +
          'radial-gradient(at 24% 78%, hsl(220 50% 18% / 0.85), transparent 60%),' +
          'linear-gradient(135deg, hsl(232 30% 7%), hsl(240 40% 10%))',
      }}
    />
  );
}
