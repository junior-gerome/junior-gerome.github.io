import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: "app-badge",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./badge.component.html",
  styleUrl: "./badge.component.scss",
})
export class BadgeComponent {
  @Input() variant: "primary" | "secondary" | "success" | "warning" | "danger" =
    "primary";
  @Input() size: "sm" | "md" | "lg" = "md";

  get badgeClasses(): string {
    const base =
      "inline-flex items-center font-medium rounded-full transition-colors border";

    const variants = {
      primary:
        "bg-primary-50 text-primary-700 border-primary-200/80 dark:bg-primary-950/40 dark:text-primary-300 dark:border-primary-800/60",
      secondary:
        "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800/60 dark:text-slate-300 dark:border-slate-700/80",
      success:
        "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60",
      warning:
        "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60",
      danger:
        "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800/60",
    };

    const sizes = {
      sm: "px-2.5 py-0.5 text-xs font-medium tracking-tight",
      md: "px-3 py-1 text-xs font-semibold",
      lg: "px-3.5 py-1.5 text-sm font-semibold",
    };

    return `${base} ${variants[this.variant]} ${sizes[this.size]}`;
  }
}
