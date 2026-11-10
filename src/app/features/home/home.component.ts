import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { BadgeComponent } from '@app/shared/components/badge/badge.component';

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, BadgeComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  techStack = [
    { name: "Angular 18", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Java & Spring Boot", category: "backend" },
    { name: "MySQL", category: "database" },
    { name: "Architecture OnPush", category: "architecture" },
  ];

  pillars = [
    {
      title: "Architecture Frontend Réactive",
      description: "Conception de modules Angular scalables basés sur les Signals, la détection de changement OnPush et des formulaires stricts.",
      tag: "Angular & Signals",
    },
    {
      title: "Services & APIs Résilientes",
      description: "Développement d'APIs RESTful performantes avec Java Spring Boot, séparation stricte DTO/Entity et transactions atomiques.",
      tag: "Java & Spring Boot",
    },
    {
      title: "Craft UI & Ergonomie",
      description: "Design systems réutilisables, respect rigoureux des contrastes (WCAG AA), accessibilité clavier et réactivité sur tous les écrans.",
      tag: "Tailwind & UX",
    },
  ];

  selectedProjects = [
    {
      title: "Gestion d'école primaire",
      role: "Lead Full Stack",
      stack: ["Angular", "Spring Boot", "MySQL", "Tailwind CSS"],
      description: "Plateforme complète : inscriptions dématérialisées, relevés académiques et module de suivi des paiements.",
      link: "/projects",
    },
    {
      title: "Gestion académique IBA",
      role: "Développeur Full Stack",
      stack: ["Blade", "Laravel", "MySQL", "Java"],
      description: "Génération de relevés de notes officiels, certificats de scolarité et cartes d'étudiants numérisées.",
      link: "/projects",
    },
  ];
}
