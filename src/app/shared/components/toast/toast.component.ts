import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: "app-toast",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./toast.component.html",
  styleUrl: "./toast.component.scss",
})
export class ToastComponent implements OnInit {
  @Input() message = "";
  @Input() type: "success" | "error" | "warning" | "info" = "info";
  @Input() duration = 4000;
  @Output() closed = new EventEmitter<void>();

  visible = true;

  ngOnInit(): void {
    if (this.duration > 0) {
      setTimeout(() => this.close(), this.duration);
    }
  }

  get toastClasses(): string {
    const base =
      "fixed bottom-6 right-6 max-w-sm w-full bg-white dark:bg-slate-900 shadow-xl rounded-xl p-4 z-50 border animate-slide-in backdrop-blur-md";
    const types = {
      success: "border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/70 dark:bg-slate-900/95",
      error: "border-rose-200 dark:border-rose-800/60 bg-rose-50/70 dark:bg-slate-900/95",
      warning: "border-amber-200 dark:border-amber-800/60 bg-amber-50/70 dark:bg-slate-900/95",
      info: "border-primary-200 dark:border-primary-800/60 bg-primary-50/70 dark:bg-slate-900/95",
    };
    return `${base} ${types[this.type]}`;
  }

  close(): void {
    this.visible = false;
    this.closed.emit();
  }
}
