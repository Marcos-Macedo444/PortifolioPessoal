import { cn } from "@/lib/utils";

type TechBadgeProps = {
  children: string;
  className?: string;
};

export function TechBadge({ children, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-white/10 bg-white/[0.035] px-2.5 py-1 font-mono text-xs text-matrix-cyan/90",
        className
      )}
    >
      {children}
    </span>
  );
}
