import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '@app/core/services/data.service';
import { BadgeComponent } from '@app/shared/components/badge/badge.component';
import { LoaderComponent } from '@app/shared/components/loader/loader.component';

interface DetailedSkill {
  name: string;
  level: "Maîtrisé" | "Avancé" | "Opérationnel";
  context: string;
}

interface DetailedCategory {
  title: string;
  badge: string;
  description: string;
  skills: DetailedSkill[];
}

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule, BadgeComponent, LoaderComponent],
  templateUrl: "./skills.component.html",
  styleUrl: "./skills.component.scss",
})
export class SkillsComponent implements OnInit {
  private dataService = inject(DataService);

  loading = true;

  categories: DetailedCategory[] = [
    {
      title: "Frontend & Architecture Web",
      badge: "Spécialité Principale",
      description: "Conception d'interfaces performantes, réactives et accessibles selon les standards modernes d'Angular.",
      skills: [
        { name: "Angular (v16 - v18)", level: "Maîtrisé", context: "Signals, ChangeDetectionStrategy.OnPush, Control Flow (@if, @for), Routing & Guards" },
        { name: "TypeScript", level: "Maîtrisé", context: "Typage strict, interfaces modulaires, synchronisation DTOs frontend/backend" },
        { name: "Tailwind CSS", level: "Maîtrisé", context: "Design tokens personnalisés, thèmes Sombre/Clair sélecteurs, responsive design" },
        { name: "RxJS & Programmation Réactive", level: "Avancé", context: "Observables, pipes, operators, gestion des flux asynchrones HTTP" },
        { name: "HTML5 sémantique & A11y", level: "Maîtrisé", context: "Normes d'accessibilité WCAG AA, balisage sémantique, navigation clavier" },
      ],
    },
    {
      title: "Backend & Conception d'APIs",
      badge: "Architecture Full Stack",
      description: "Développement d'APIs sécurisées, modulaires et performantes pour alimenter des applications d'entreprise.",
      skills: [
        { name: "Java & Spring Boot", level: "Avancé", context: "REST Controllers, Spring Data JPA, Injection de dépendances, Transactions" },
        { name: "Bases de données MySQL", level: "Avancé", context: "Modélisation relationnelle, requêtes optimisées, intégrité référentielle" },
        { name: "API REST & Contrats DTO", level: "Maîtrisé", context: "Format JSON normalisé, codes HTTP conformes, découplage entité/modèle" },
        { name: "Laravel & Blade", level: "Opérationnel", context: "Développement d'applications MVC, routes, authentification et vues Blade" },
      ],
    },
    {
      title: "Outils, Qualité & Déploiement",
      badge: "Méthodologie & Craft",
      description: "Pratiques rigoureuses de versionnement, d'automatisation et de collaboration au sein d'une équipe technique.",
      skills: [
        { name: "Git & GitHub", level: "Avancé", context: "Git flow, PR reviews, branches de fonctionnalités, GitHub Actions CI/CD" },
        { name: "Docker & Conteneurs", level: "Opérationnel", context: "Containerisation d'environnements, Dockerfile multi-stage, docker-compose" },
        { name: "Figma & Ergonomie UI", level: "Opérationnel", context: "Traduction fidèle de maquettes, extraction de tokens et composants réutilisables" },
        { name: "Postman & Tests d'APIs", level: "Avancé", context: "Validation des endpoints, collections de tests automatisés, mocks" },
      ],
    },
  ];

  tools = [
    "VS Code",
    "Git",
    "GitHub",
    "Docker",
    "Postman",
    "Figma",
    "Angular CLI",
    "Spring Initializr",
    "MySQL Workbench",
    "npm",
    "Linux / Bash",
  ];

  ngOnInit(): void {
    // Simuler un chargement court et propre
    setTimeout(() => {
      this.loading = false;
    }, 150);
  }

  getLevelBadgeVariant(level: string): "success" | "primary" | "secondary" {
    if (level === "Maîtrisé") return "success";
    if (level === "Avancé") return "primary";
    return "secondary";
  }
}
