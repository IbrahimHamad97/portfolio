export function BackgroundLayers() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-violet-500/20 to-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-[-280px] right-[-180px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-emerald-400/20 via-sky-400/20 to-indigo-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] [background-size:24px_24px] opacity-50 dark:opacity-35" />
    </div>
  );
}

