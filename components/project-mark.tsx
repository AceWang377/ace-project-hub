import { clsx } from "clsx";

type ProjectMarkProps = {
  label: string;
  accent?: string;
  dark?: boolean;
  className?: string;
};

export function ProjectMark({ label, accent = "#00c7d4", dark, className }: ProjectMarkProps) {
  return (
    <span
      className={clsx(
        "inline-flex size-11 shrink-0 items-center justify-center rounded-[8px] border text-[0.72rem] font-black tracking-[0.08em]",
        dark ? "border-white/20 bg-white text-[#101211]" : "border-[#101211]/10 bg-[#101211] text-white",
        className,
      )}
      style={{ boxShadow: `inset 0 -3px 0 ${accent}` }}
      aria-hidden="true"
    >
      {label}
    </span>
  );
}
