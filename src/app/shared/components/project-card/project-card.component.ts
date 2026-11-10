import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: "app-project-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./project-card.component.html",
  styleUrl: "./project-card.component.scss",
})
export class ProjectCardComponent {
  @Input() title?: string;
  @Input() description?: string;
  @Input() imageUrl?: string;
  @Input() imageAlt: string = "Card image";
  @Input() hoverable = true;

  get projectcardClasses(): string {
    const base =
      "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300";
    const hover = this.hoverable
      ? "hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xl hover:-translate-y-1"
      : "shadow-sm";
    return `${base} ${hover}`;
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    if (target) {
      target.src = 'assets/icons/portfolio.png';
    }
  }
}
