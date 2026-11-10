import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: "app-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
})
export class ButtonComponent {
  @Input() type: "button" | "submit" | "reset" = "button";
  @Input() variant: "primary" | "secondary" | "outline" | "ghost" = "primary";
  @Input() size: "sm" | "md" | "lg" = "md";
  @Input() disabled = false;
  @Input() loading = false;
  @Input() fullWidth = false;
  @Output() clicked = new EventEmitter<Event>();

  get buttonClasses(): string {
    const base =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer";

    const variants = {
      primary:
        "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-sm hover:shadow focus-visible:ring-primary-600 dark:ring-offset-slate-900",
      secondary:
        "bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 focus-visible:ring-slate-500",
      outline:
        "border border-slate-300 dark:border-slate-700 bg-transparent text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:border-slate-400 dark:hover:border-slate-600 focus-visible:ring-primary-500",
      ghost:
        "bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70 focus-visible:ring-slate-500",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs font-medium gap-1.5",
      md: "px-4 py-2 text-sm font-medium gap-2",
      lg: "px-6 py-2.5 text-base font-semibold gap-2.5",
    };

    const width = this.fullWidth ? "w-full" : "";

    return `${base} ${variants[this.variant]} ${sizes[this.size]} ${width}`;
  }

  handleClick(event: Event): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }
}
