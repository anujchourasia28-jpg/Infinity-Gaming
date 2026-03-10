import React from "react";
import { cn } from "@/lib/utils";

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export const CyberButton = React.forwardRef<HTMLButtonElement, CyberButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 font-display font-bold tracking-wider uppercase transition-all duration-300 overflow-hidden group";
    
    const variants = {
      primary: "bg-primary/10 text-primary border border-primary hover:bg-primary hover:text-primary-foreground hover:box-glow-cyan",
      secondary: "bg-secondary/10 text-secondary border border-secondary hover:bg-secondary hover:text-secondary-foreground hover:box-glow-purple",
      outline: "bg-transparent text-foreground border border-border hover:border-primary hover:text-primary transition-colors",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        
        {/* Decorative corner accents */}
        <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-current opacity-50 group-hover:opacity-100 transition-opacity" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-current opacity-50 group-hover:opacity-100 transition-opacity" />
      </button>
    );
  }
);

CyberButton.displayName = "CyberButton";
