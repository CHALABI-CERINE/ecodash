# 🇩🇿 Algérie Eco-Dash 2025 — Baromètre Économique

Bienvenue sur **Algérie Eco-Dash 2025**, un tableau de bord interactif conçu pour analyser les indicateurs clés de performance nationale. Ce projet transforme des données brutes en une visualisation stratégique, reliant la volatilité du marché pétrolier au quotidien du citoyen algérien.

<p align="center">
  <img src="https://img.shields.io/badge/Module-PRAVAN-blue?style=for-the-badge&logo=university" />
  <img src="https://img.shields.io/badge/University-USTHB-0056D2?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Session-2025%2F2026-lightgrey?style=for-the-badge" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Backend-Flask-green?style=flat-square&logo=flask" />
  <img src="https://img.shields.io/badge/Frontend-HTML5%20%7C%20CSS3-orange?style=flat-square&logo=html5" />
  <img src="https://img.shields.io/badge/Viz-Chart.js-FF6384?style=flat-square&logo=chartdotjs" />
  <img src="https://img.shields.io/badge/Design-Modern-9cf?style=flat-square" />
</p>

---

## 🧭 Cadre du Projet

Ce projet a été réalisé dans le cadre du module **Programmation Avancée (PRAVAN)** du Master 1 Big Data à l'**USTHB**.

**Le Thème :** *"L'économie algérienne face aux dynamiques mondiales : de l'exploitation énergétique à la réalité sociale."*

L'objectif est de fournir un outil d'aide à la décision permettant de suivre le flux de la richesse nationale : de sa source (Pétrole/Gaz) à son utilisation (Budget de l'État) et son impact final (Pouvoir d'achat).

---

## 👥 L'Équipe (Team 1)

Travail présenté à **Mr. BOUBENIA Mohamed**.

| Étudiant(e) | Rôle & Contribution |
|:---|:---|
| 👩‍💻 **BOUDJELAL Maria** | Développement Frontend & Architecture SPA |
| 👩‍💻 **CHALABI Cerine Maria** | Analyse de données & Backend Flask |
| 👩‍💻 **AZZOUG Kenza** | Collecte de données & Documentation |
| 👨‍💻 **TOUIMER Hamza** | Intégration Chart.js & Design UX/UI |

---

## 📊 Questions d'Analyse & Visualisations

Nous avons structuré le Dashboard autour de 4 questions stratégiques :

| # | Question Stratégique | Visualisation | Insight Clé |
|:-:|---|---|---|
| **Q1** | **Baromètre Énergétique**<br>Comment le *Zarzaitine* se comporte-t-il face au *Brent* ? | 📈 **Line Chart**<br>(Multi-axes) | Le brut algérien maintient une prime de qualité (+$0.45) face au Brent. |
| **Q2** | **Pouvoir d'Achat**<br>Quel est l'impact des prix sur l'inflation (IPC) ? | 📊 **Bar Chart**<br>(Histogramme) | Une déflation de -0.4% en 2025 atténue l'impact des chocs externes. |
| **Q3** | **Valeur Refuge**<br>L'Or protège-t-il contre la chute du pétrole ? | 📉 **Dual Axis**<br>(Or vs Pétrole) | Corrélation négative forte (-0.85) : l'Or joue son rôle de stabilisateur. |
| **Q4** | **Gestion de l'État**<br>Quelle est la structure de la Loi de Finances 2025 ? | 🍩 **Doughnut**<br>(Répartition) | 75% du budget absorbe le Fonctionnement, limitant l'investissement. |

---

## 🧠 Concepts Clés & Stack Technique

L'application repose sur une architecture **SPA (Single Page Application)** servie par un backend léger.

### 🎨 Frontend (Interface)
* **Design :** Utilisation du **Glassmorphism** (effet verre dépoli) et du **Tilt Effect** (cartes 3D interactives au survol).
* **Interactivité :** Zoom dynamique sur les graphiques, modales d'information, et mode responsive (Mobile/Desktop).
* **Bibliothèque :** `Chart.js` pour le rendu des graphiques avec animations fluides.

### ⚙️ Backend (Logique)
* **Framework :** `Python Flask` utilisé comme serveur API REST.
* **Endpoints :** 4 routes API (`/api/petrole`, `/api/inflation`, etc.) délivrant des données JSON nettoyées.
* **Data Source :** Données agrégées depuis l'ONS, la Banque d'Algérie et l'OPEP.

---

## 💡 Ce que nous avons appris

À travers la réalisation de ce projet **Eco-Dash**, nous avons acquis des compétences transversales :

1.  **Architecture Fullstack :** Comprendre comment relier un backend Python à un frontend dynamique via des appels asynchrones (`fetch` / `async-await`).
2.  **Data Storytelling :** Ne pas seulement afficher des chiffres, mais raconter une histoire économique cohérente (Cause à Effet).
3.  **Design UI moderne :** Implémentation de CSS avancé (variables `:root`, animations `@keyframes`, `backdrop-filter`).
4.  **Collaboration Git :** Gestion des versions et fusion du code au sein d'une équipe de 4 personnes.

---

## 🚀 Installation & Démarrage

Pour lancer le projet localement :

```bash
# 1. Cloner le dépôt
git clone [https://github.com/votre-user/eco-dash-2025.git](https://github.com/votre-user/eco-dash-2025.git)

# 2. Installer les dépendances (Flask)
pip install flask

# 3. Lancer le serveur
python app.py
