export function CyberBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(45,255,143,0.10),transparent_25%),radial-gradient(circle_at_84%_18%,rgba(32,230,255,0.08),transparent_28%),radial-gradient(circle_at_48%_88%,rgba(90,124,255,0.09),transparent_32%),linear-gradient(180deg,#020605_0%,#07100f_52%,#020605_100%)]" />
      <div className="absolute inset-0 opacity-[0.11] [background-image:linear-gradient(rgba(45,255,143,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(32,230,255,0.14)_1px,transparent_1px)] [background-size:58px_58px] sm:[background-size:72px_72px]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(115deg,transparent_0%,transparent_46%,rgba(32,230,255,0.42)_47%,transparent_48%,transparent_100%)] [background-size:260px_260px]" />

      <div className="absolute left-1/2 top-[44%] h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-matrix-cyan/10 sm:h-[34rem] sm:w-[34rem]">
        <div className="absolute inset-10 rounded-full border border-matrix-green/10" />
        <div className="absolute inset-20 rounded-full border border-matrix-blue/10" />
        <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom animate-scan bg-gradient-to-b from-matrix-cyan/20 to-transparent motion-reduce:animate-none" />
      </div>

      <div className="absolute inset-x-[-12%] top-[18%] h-[46%] opacity-70">
        <div className="absolute left-[10%] top-[24%] h-px w-[34%] rotate-[8deg] bg-gradient-to-r from-transparent via-matrix-cyan/24 to-transparent" />
        <div className="absolute left-[38%] top-[42%] h-px w-[30%] -rotate-[10deg] bg-gradient-to-r from-transparent via-matrix-green/22 to-transparent" />
        <div className="absolute left-[60%] top-[18%] h-px w-[28%] rotate-[14deg] bg-gradient-to-r from-transparent via-matrix-blue/24 to-transparent" />
        <div className="absolute left-[16%] top-[20%] h-2 w-2 rounded-full border border-matrix-cyan/40 bg-matrix-cyan/20 shadow-cyan" />
        <div className="absolute left-[42%] top-[37%] h-2 w-2 rounded-full border border-matrix-green/40 bg-matrix-green/20 shadow-glow" />
        <div className="absolute left-[66%] top-[15%] h-2 w-2 rounded-full border border-matrix-blue/40 bg-matrix-blue/20 shadow-cyan" />
        <div className="absolute left-[82%] top-[34%] h-1.5 w-1.5 rounded-full border border-matrix-purple/35 bg-matrix-purple/20 shadow-purple" />
      </div>

      <div className="absolute left-[-12%] top-1/4 h-px w-[124%] animate-scan bg-gradient-to-r from-transparent via-matrix-green/18 to-transparent motion-reduce:animate-none" />
      <div className="absolute bottom-[-18rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-matrix-cyan/[0.07] blur-3xl" />
    </div>
  );
}
