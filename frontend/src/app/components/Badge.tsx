interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success";
}

export function Badge({ children, variant = "primary" }: BadgeProps) {
  const variants = {
    primary: "bg-gradient-to-r from-[#22d3ee]/20 to-[#a855f7]/20 text-[#22d3ee] border-[#22d3ee]/30",
    secondary: "bg-muted/50 text-muted-foreground border-border",
    success: "bg-green-500/20 text-green-400 border-green-500/30",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
