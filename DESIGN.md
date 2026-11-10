---
name: Portfolio NGUEP MANYO Junior Gerome
description: Système de design crafté pour le portfolio d'un ingénieur Full Stack Angular & Spring Boot
colors:
  primary: "#2563eb"
  primary-hover: "#1d4ed8"
  primary-deep: "#1e40af"
  primary-light: "#eff6ff"
  primary-accent: "#3b82f6"
  neutral-bg: "#fafafa"
  neutral-surface: "#ffffff"
  neutral-card: "#f8fafc"
  neutral-ink: "#0f172a"
  neutral-text: "#334155"
  neutral-muted: "#64748b"
  neutral-subtle: "#94a3b8"
  neutral-border: "#e2e8f0"
  neutral-divider: "#cbd5e1"
  dark-bg: "#090d16"
  dark-surface: "#0f172a"
  dark-card: "#111827"
  dark-ink: "#f8fafc"
  dark-text: "#cbd5e1"
  dark-muted: "#94a3b8"
  dark-border: "#1e293b"
  dark-divider: "#334155"
  black: "#000000"
  white: "#ffffff"
  success: "#059669"
  success-light: "#ecfdf5"
  success-dark: "#047857"
  warning: "#d97706"
  warning-light: "#fffbeb"
  warning-dark: "#b45309"
  danger: "#e11d48"
  danger-light: "#fff1f2"
  danger-dark: "#be123c"
typography:
  display:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  heading:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
---

# DESIGN SYSTEM — Portfolio Junior Gerome

## Overview
Ce système de design incarne l'exigence du craft UI pour le portfolio de Junior Gerome (Mode `Experience`). Il bannit formellement les clichés d'interfaces générées par IA (textes en dégradé, fausses barres de progression de compétences, bordures épaisses unilatérales, cartes clonées avec émojis) pour offrir une présentation lisible, précise, élégante et typographiquement affirmée.

## Colors
- **Mode Clair** :
  - Fond de page : `#fafafa` (Zinc/Slate 50)
  - Cartes et conteneurs : `#ffffff` (Pure White) avec fine bordure `#e2e8f0`
  - Typographie principale : `#0f172a` (Slate 900)
  - Typographie secondaire : `#64748b` (Slate 500)
- **Mode Sombre** :
  - Fond de page : `#090d16` (Deep Obsidian)
  - Cartes et conteneurs : `#0f172a` (Slate 900) avec bordure `#1e293b`
  - Typographie principale : `#f8fafc` (Slate 50)
  - Typographie secondaire : `#94a3b8` (Slate 400)
- **Accent** :
  - `#2563eb` (Cobalt Blue 600) en accent structuré, `#1d4ed8` en hover.

## Typography
- **Titres & Display** : `Sora` (géométrie nette, plein d'assurance, tracking -0.02em).
- **Texte courant (Body)** : `Figtree` (extrêmement lisible, rythmé, humaniste).
- **Code & Métriques** : `JetBrains Mono` (tabulaire, alignement strict).

## Layout
- Grille fluide avec conteneur max `1200px` (`max-w-7xl`).
- Rythme vertical aéré : plus d'espace au-dessus des titres qu'en dessous (`mt-16 mb-6`).
- Hiérarchie claire : chaque section a un rôle d'expérience défini.

## Elevation & Depth
- Une seule déclaration d'élévation par surface : bordure fine (`1px solid`) combinée à une ombre diffuse et douce (`box-shadow: 0 4px 20px -2px rgba(0,0,0,0.05)`).
- Pas d'effet néon artificiel ou de halo coloré sans décalage.

## Shapes
- Cartes et blocs : `rounded-xl` (12px à 16px).
- Boutons et contrôles : `rounded-lg` (8px à 10px).
- Badges et pills : `rounded-full` avec padding précis (`px-3 py-1`).

## Components
- **Boutons** : Solides, avec état de focus visible, spinner vectoriel SVG, transitions fluides.
- **Cartes Projets** : Vignette soignée, tags technologiques contrastés, actions claires avec icônes vectorielles.
- **Grille de compétences** : Matrices thématiques par niveau d'expertise et contexte réel de production.
- **Notifications (Toasts)** : Cartes flottantes à bordure intégrale douce, sans `border-l-4`.

## Do's and Don'ts
- **DO** : Utiliser des icônes SVG cohérentes en stroke et fill.
- **DO** : Garder un contraste texte ≥ 4.5:1 partout.
- **DO** : Préférer du texte uni et fort plutôt que des dégradés décoratifs.
- **DON'T** : Ne jamais utiliser de barres de pourcentage arbitraires pour les compétences.
- **DON'T** : Ne jamais utiliser de fausses images brisées ou placeholders externes.
- **DON'T** : Ne jamais mettre d'émojis à la place d'icônes d'action.
