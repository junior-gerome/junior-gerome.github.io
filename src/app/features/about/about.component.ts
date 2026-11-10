import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/components/button/button.component';

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.scss",
})
export class AboutComponent {
  values = [
    {
      title: "Rigueur Technique",
      description: "Architecture propre, typage strict, séparation des responsabilités et respect des patterns d'ingénierie.",
    },
    {
      title: "Collaboration & Clarté",
      description: "Communication transparente, code documenté, revues de code constructives et écoute active des besoins produit.",
    },
    {
      title: "Apprentissage Continu",
      description: "Veille constante sur l'écosystème Angular, Java Spring Boot et les évolutions des standards du Web.",
    },
  ];

  education = [
    {
      degree: "Licence en Génie Logiciel",
      school: "Institut Universitaire du Golfe de Guinée (IUG)",
      year: "2023 - 2024",
      detail: "Conception d'architectures logicielles, bases de données avancées, ingénierie des exigences et sécurité web.",
    },
    {
      degree: "BTS en Génie Logiciel",
      school: "Institut Universitaire du Golfe de Guinée (IUG)",
      year: "2022 - 2023",
      detail: "Algorithmique, programmation orientée objet (Java), développement web et modélisation UML.",
    },
  ];

  certifications = [
    {
      name: "Développement Frontend Moderne Angular",
      issuer: "Pratiques Industrielles & Certifications Techniques",
      year: "2024",
    },
    {
      name: "Architecture & Sécurité Spring Boot",
      issuer: "Spécialisation Backend",
      year: "2023",
    },
  ];
}
