export function GradientBlobs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-40 left-1/4 h-[28rem] w-[28rem] animate-blob rounded-full bg-primary/30 blur-[110px]" />
      <div className="absolute top-20 right-1/4 h-[24rem] w-[24rem] animate-blob rounded-full bg-accent/20 blur-[110px] [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] animate-blob rounded-full bg-primary/20 blur-[100px] [animation-delay:8s]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.15] grid-mask" />
    </div>
  );
}
