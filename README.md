# 🇩🇿 Algérie Eco-Dash 2025 — Baromètre Économique



Bienvenue sur **Algérie Eco-Dash 2025**, un tableau de bord interactif conçu pour analyser les indicateurs clés de performance économique nationale.  Ce projet transforme des données brutes en visualisations dynamiques pour une meilleure compréhension de l'économie algérienne. 

<p align="center">
  <img src="https://img.shields.io/badge/Module-PRAVAN-blue? style=for-the-badge&logo=university" />
  <img src="https://img.shields.io/badge/University-USTHB-0056D2?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Session-2025%2F2026-lightgrey?style=for-the-badge" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Backend-Flask-green?style=flat-square&logo=flask" />
  <img src="https://img.shields.io/badge/Frontend-HTML5%20%7C%20CSS3-orange?style=flat-square&logo=html5" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript" />
  <img src="https://img.shields.io/badge/Viz-Chart.js-FF6384?style=flat-square&logo=chartdotjs" />
  <img src="https://img.shields.io/badge/Design-Glassmorphism-9cf?style=flat-square" />
</p>

<p align="center">
  <a href="https://www.youtube.com/watch? v=pIzs0VJfSFo">
    <img src="https://img.shields.io/badge/▶️_Voir_la_Démo-YouTube-FF0000?style=for-the-badge&logo=youtube" alt="Voir la vidéo" />
  </a>
  <a href="https://github.com/CHALABI-CERINE/ecodash/raw/main/static/img/Rapport_miniProjet. pdf">
    <img src="https://img.shields.io/badge/📄_Télécharger_Rapport-PDF-red?style=for-the-badge&logo=adobe" alt="Télécharger le rapport" />
  </a>
</p>

---

## 📺 Démonstration Vidéo

<p align="center">
  <a href="https://www.youtube.com/watch? v=pIzs0VJfSFo">
    <img src="https://img.youtube.com/vi/pIzs0VJfSFo/maxresdefault.jpg" alt="Vidéo de démonstration" width="80%" />
  </a>
</p>

<p align="center">
  🎬 <strong><a href="https://www.youtube.com/watch?v=pIzs0VJfSFo">Cliquez ici pour voir la démonstration complète du projet</a></strong>
</p>

---

## 🧭 Cadre du Projet

Ce projet a été réalisé dans le cadre du module **Programmation Avancée (PRAVAN)** du Master 1 Big Data à l'**USTHB**. 

### 🎯 Le Thème
> *"L'économie algérienne face aux dynamiques mondiales :  de l'exploitation énergétique à la réalité sociale."*

### 🎯 Objectif
Fournir un **outil d'aide à la décision** permettant de suivre le flux de la richesse nationale : 
- 🛢️ **Source** → Pétrole & Gaz
- 💰 **Utilisation** → Budget de l'État
- 📈 **Impact** → Inflation & Pouvoir d'achat

---

## 👥 L'Équipe (Team 1)

Travail présenté à **Mr. BOUBENIA Mohamed**. 

| Étudiant(e) | Rôle & Contribution |
|: ---|:---|
| 👩‍💻 **BOUDJELAL Maria** | Développement Frontend & Architecture SPA |
| 👩‍💻 **CHALABI Cerine Maria** | Analyse de données & Backend Flask |
| 👩‍💻 **AZZOUG Kenza** | Collecte de données & Documentation |
| 👨‍💻 **TOUIMER Hamza** | Intégration Chart.js & Design UX/UI |

---

## 📊 Questions d'Analyse & Visualisations

Nous avons structuré le Dashboard autour de **4 questions stratégiques** : 

| # | Question Stratégique | Visualisation | Insight Clé |
|:-:|: ---|:---|: ---|
| **Q1** | 🛢️ **Baromètre Énergétique**<br>Comment le *Zarzaitine* se comporte-t-il face au *Brent* ?  | 📈 Line Chart | Le brut algérien maintient une prime de qualité |
| **Q2** | 🛒 **Pouvoir d'Achat**<br>Quel est l'impact des prix sur l'inflation (IPC) ? | 📊 Bar Chart | Une déflation de -0.4% en 2025 atténue les chocs externes |
| **Q3** | 🪙 **Valeur Refuge**<br>L'Or protège-t-il contre la chute du pétrole ? | 📉 Dual Axis | Corrélation négative forte (-0.85) |
| **Q4** | ⚖️ **Gestion de l'État**<br>Quelle est la structure de la Loi de Finances 2025 ? | 🍩 Doughnut | 75% du budget absorbe le Fonctionnement |

---

## 🧠 Stack Technique

```
ecodash/
├── 📁 static/
│   ├── 📁 css/
│   │   └── style.css
│   ├── 📁 js/
│   │   └── dashboard.js
│   └── 📁 img/
│       └── Rapport_miniProjet.pdf
├── 📁 templates/
│   └── index. html
├── app.py
├── requirements.txt
└── README.md
```

### 🎨 Frontend
- **HTML5 / CSS3** - Structure & Stylisation
- **Glassmorphism** - Effet verre dépoli
- **Chart.js** - Graphiques animés
- **Font Awesome** - Icônes

### ⚙️ Backend
- **Python Flask** - Serveur API REST
- **Jinja2** - Templating HTML

### 📡 Endpoints API

| Route | Description |
|:---|:---|
| `GET /api/petrole` | Données du marché pétrolier |
| `GET /api/inflation` | Indice des Prix à la Consommation |
| `GET /api/refuge` | Comparatif Or vs Pétrole |
| `GET /api/budget` | Répartition Loi de Finances 2025 |

### 📊 Sources de Données
- 🏛️ **ONS** - Office National des Statistiques
- 🏦 **Banque d'Algérie** - Données monétaires
- 🛢️ **OPEP** - Cours du pétrole

---

## 💡 Ce que nous avons appris

| Compétence | Description |
|:---|: ---|
| 🔗 **Architecture Fullstack** | Relier backend Python à frontend dynamique |
| 📖 **Data Storytelling** | Raconter une histoire économique cohérente |
| 🎨 **Design UI Moderne** | CSS avancé avec animations |
| 🤝 **Collaboration Git** | Gestion des versions en équipe |

---

## 🚀 Installation & Démarrage

```bash
# 1. Cloner le dépôt
git clone https://github.com/CHALABI-CERINE/ecodash.git

# 2. Accéder au répertoire
cd ecodash

# 3. Installer les dépendances
pip install flask

# 4. Démarrer le serveur
python app.py
```

Ouvrez votre navigateur :  **http://localhost:5000**

---

## 📄 Documentation

<p align="center">
  <a href="https://github.com/CHALABI-CERINE/ecodash/raw/main/static/img/Rapport_miniProjet. pdf">
    <img src="https://img.shields.io/badge/📥_Télécharger_le_Rapport_Complet-PDF-EC1C24?style=for-the-badge&logo=adobeacrobatreader" alt="Télécharger le rapport PDF" />
  </a>
</p>

📥 **[Télécharger le Rapport Complet (PDF)](https://github.com/CHALABI-CERINE/ecodash/raw/main/static/img/Rapport_miniProjet.pdf)**

---

<p align="center">
  <strong>USTHB - Master 1 Big Data - 2025/2026</strong>
</p>

<p align="center">
  Made with ❤️ by <strong>Team 1</strong>
</p>
