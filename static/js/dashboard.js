/*
    Auteur: Étudiant du module de développement
    Description: Script principal gérant l'affichage des graphiques (Chart.js) et les interactions utilisateur.
*/

const configs = {};
let activeZoom = null;

// Définition de la palette de couleurs
const colors = {
    zarzaitine: '#34d399', 
    brent: '#38bdf8',      
    wti: '#f472b6',        
    gold: '#fbbf24',       
    inflation: '#818cf8',  
    budgetFonct: '#f87171', 
    budgetEquip: '#38bdf8' 
};

// Fonction utilitaire pour générer un gradient
function getGradient(ctx, colorStart, colorEnd) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(1, colorEnd);
    return gradient;
}

// Configuration par défaut pour Chart.js
Chart.defaults.color = '#94a3b8';
Chart.defaults.borderColor = 'rgba(148, 163, 184, 0.1)';
Chart.defaults.font.family = "'Inter', sans-serif";

// Fonction d'initialisation appelée au chargement de la page
async function init() {
    try {
        // Récupération des données depuis les endpoints API Flask
        const [pet, inf, ref, bud] = await Promise.all([
            fetch('/api/petrole').then(r => r.json()),
            fetch('/api/inflation').then(r => r.json()),
            fetch('/api/refuge').then(r => r.json()),
            fetch('/api/budget').then(r => r.json())
        ]);

        // --- 1. Graphique PÉTROLE ---
        const ctxPet = document.getElementById('chartPetrole').getContext('2d');
        const gradPet = getGradient(ctxPet, 'rgba(52, 211, 153, 0.15)', 'rgba(52, 211, 153, 0.0)');

        configs['chartPetrole'] = {
            type: 'line',
            data: {
                labels: pet.years,
                datasets: [
                    { 
                        label: 'Zarzaitine', 
                        data: pet.zarzaitine, 
                        borderColor: colors.zarzaitine, 
                        backgroundColor: gradPet,
                        fill: false,
                        tension: 0.4,
                        borderWidth: 3,
                        pointRadius: 4,
                        pointHoverRadius: 8
                    },
                    { 
                        label: 'Brent', 
                        data: pet.brent, 
                        borderColor: colors.brent, 
                        borderDash: [5,5], 
                        tension: 0.4, 
                        borderWidth: 2,
                        pointRadius: 0,
                        pointHoverRadius: 6
                    },
                    { 
                        label: 'WTI', 
                        data: pet.wti, 
                        borderColor: colors.wti, 
                        borderDash: [2,2], 
                        tension: 0.4, 
                        borderWidth: 2,
                        pointRadius: 0,
                        pointHoverRadius: 6
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                interaction: { mode: 'index', intersect: false },
                plugins: { legend: { position: 'top' } },
                animation: { y: { duration: 2000, easing: 'easeOutQuart' } }
            }
        };

        // --- 2. Graphique INFLATION ---
        configs['chartInflation'] = {
            type: 'bar',
            data: { 
                labels: inf.labels, 
                datasets: [{ 
                    label: 'Inflation (%)', 
                    data: inf.values, 
                    backgroundColor: colors.inflation,
                    borderRadius: 6,
                    hoverBackgroundColor: '#a5b4fc'
                }]
            },
            options: { 
                maintainAspectRatio: false,
                animation: { y: { duration: 1500, easing: 'easeOutBounce' } }
            }
        };

        // --- 3. Graphique VALEURS REFUGE ---
        configs['chartRefuge'] = {
            type: 'line',
            data: { 
                labels: ref.months, 
                datasets: [
                    { 
                        label: 'Or (USD)', 
                        data: ref.gold, 
                        borderColor: colors.gold, 
                        yAxisID: 'y',
                        borderWidth: 2,
                        tension: 0.4,
                        pointBackgroundColor: colors.gold
                    },
                    { 
                        label: 'Pétrole ($)', 
                        data: ref.brent, 
                        borderColor: '#f1f5f9', 
                        yAxisID: 'y1',
                        borderWidth: 2,
                        borderDash: [5,5],
                        tension: 0.4,
                        pointRadius: 0
                    }
                ]
            },
            options: { 
                maintainAspectRatio: false,
                interaction: { mode: 'index', intersect: false },
                scales: { 
                    y: { position: 'left', grid: { display: true } },
                    y1: { position: 'right', grid: { display: false } }
                }
            }
        };

        // --- 4. Graphique BUDGET ---
        configs['chartBudget'] = {
            type: 'doughnut',
            data: { 
                labels: bud.labels, 
                datasets: [{ 
                    data: bud.values, 
                    backgroundColor: [colors.budgetFonct, colors.budgetEquip],
                    borderWidth: 0,
                    hoverOffset: 15
                }]
            },
            options: { 
                maintainAspectRatio: false, 
                cutout: '75%',
                plugins: { legend: { position: 'bottom' } },
                animation: { animateRotate: true, duration: 2000, easing: 'easeOutCirc' }
            }
        };

        // Rendu initial de tous les graphiques
        Object.keys(configs).forEach(id => {
            const el = document.getElementById(id);
            if(el) {
                new Chart(el.getContext('2d'), configs[id]);
            }
        });

        // Lancement de l'effet visuel 3D sur les cartes
        initTiltEffect();

    } catch (error) {
        console.error("Erreur lors de l'initialisation des graphiques:", error);
    }
}

// --- FONCTIONS D'INTERACTION ---

// Fonction pour simuler un effet de machine à écrire
function typeWriter(elementId, text, speed = 10) {
    const el = document.getElementById(elementId);
    el.innerHTML = "";
    
    // Affichage avec transition d'opacité
    el.style.opacity = 0;
    el.innerHTML = text;
    
    let op = 0;
    const timer = setInterval(() => {
        if (op >= 1) clearInterval(timer);
        el.style.opacity = op;
        op += 0.05;
    }, speed);
}

// Gestion de l'affichage de la modale d'information
window.showInfo = function(topic) {
    const modal = document.getElementById('infoBox');
    const title = document.getElementById('boxTitle');
    
    modal.style.display = 'flex';

    const content = {
        'summary': {
            title: "Résumé Stratégique",
            html: `
                <p><b>Le Baromètre 2025 :</b> Une vision claire de l'économie.</p>
                <br>
                <ul style="margin-left:20px; color:#cbd5e1;">
                   <li style="margin-bottom:10px;">Indépendance : Comment le brut algérien performe face au WTI.</li>
                   <li style="margin-bottom:10px;">Quotidien : L'impact direct sur le panier de la ménagère.</li>
                   <li>Répartition : Où va l'argent de l'État en 2025 ?</li>
                </ul>
            `
        },
        'details': {
            title: "Stack & Data",
            html: `
                <p>Projet développé avec <b>Flask</b> & <b>Chart.js</b>.</p>
                <br>
                <p style="color:#94a3b8">Les données sont récupérées via des requêtes asynchrones et affichées dynamiquement.</p>
                <br>
                <p><i>Style : Moderne v2.0</i></p>
            `
        }
    };

    if(content[topic]) {
        title.innerText = content[topic].title;
        typeWriter('boxText', content[topic].html);
    }
}

// Gestion de la fonction de Zoom sur un graphique
window.zoom = function(id, title) {
    const overlay = document.getElementById('zoomOverlay');
    const titleEl = document.getElementById('zoomTitle');
    
    if(!configs[id]) {
        console.error("Configuration introuvable pour l'ID:", id);
        return;
    }

    overlay.style.display = 'flex';
    titleEl.innerText = title;
    
    const ctx = document.getElementById('zoomCanvas').getContext('2d');
    
    if (activeZoom) {
        activeZoom.destroy();
    }
    
    // Copie profonde de la configuration pour éviter les effets de bord
    const baseConfig = configs[id];
    
    const zoomConfig = {
        type: baseConfig.type,
        data: JSON.parse(JSON.stringify(baseConfig.data)),
        options: JSON.parse(JSON.stringify(baseConfig.options))
    };

    // Ajustements spécifiques pour la vue agrandie
    zoomConfig.options.plugins.legend = { display: true, labels: { color: '#fff', font: {size: 14} } };
    zoomConfig.options.layout = { padding: 20 };
    
    activeZoom = new Chart(ctx, zoomConfig);
}

// Fonctions de fermeture des modales
window.closeBox = function() { document.getElementById('infoBox').style.display = 'none'; }
window.closeZoom = function() { 
    document.getElementById('zoomOverlay').style.display = 'none'; 
    if(activeZoom) activeZoom.destroy();
}

// Gestion de la barre latérale sur mobile
window.toggleSidebar = function() {
    document.getElementById('sidebar').classList.toggle('active');
}

// Initialisation de l'effet de perspective (Tilt) sur les cartes
function initTiltEffect() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
        });
    });
}

document.addEventListener('DOMContentLoaded', init);