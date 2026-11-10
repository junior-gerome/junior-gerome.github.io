import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { path: "/", label: "Accueil" },
    { path: "/about", label: "À propos" },
    { path: "/skills", label: "Compétences" },
    { path: "/projects", label: "Projets" },
    { path: "/experience", label: "Expérience" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];
}
