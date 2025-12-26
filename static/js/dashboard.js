const configs = {};
let activeZoom = null;

async function init() {
    const [pet, inf, ref, bud] = await Promise.all([
        fetch('/api/petrole').then(r => r.json()),
        fetch('/api/inflation').then(r => r.json()),
        fetch('/api/refuge').then(r => r.json()),
        fetch('/api/budget').then(r => r.json())
    ]);

    // Q1: PETROLE AVEC 3 VARIABLES
    configs['chartPetrole'] = {
        type: 'line',
        data: {
            labels: pet.years,
            datasets: [
                { label: 'Zarzaitine', data: pet.zarzaitine, borderColor: '#00ff88', tension: 0.3 },
                { label: 'Brent', data: pet.brent, borderColor: '#38bdf8', borderDash: [5,5] },
                { label: 'WTI', data: pet.wti, borderColor: '#f39c12', borderDash: [2,2] } // 3ème variable
            ]
        },
        options: { maintainAspectRatio: false }
    };

    // Q2: INFLATION
    configs['chartInflation'] = {
        type: 'bar',
        data: { labels: inf.labels, datasets: [{ label: 'Inflation %', data: inf.values, backgroundColor: '#38bdf8' }]},
        options: { maintainAspectRatio: false }
    };

    // Q3: REFUGE
    configs['chartRefuge'] = {
        type: 'line',
        data: { labels: ref.months, datasets: [
            { label: 'Or (USD)', data: ref.gold, borderColor: '#f39c12', yAxisID: 'y' },
            { label: 'Brent ($)', data: ref.brent, borderColor: '#fff', yAxisID: 'y1' }
        ]},
        options: { maintainAspectRatio: false, scales: { y1: { position: 'right', grid: { display: false }}}}
    };

    // Q4: BUDGET
    configs['chartBudget'] = {
        type: 'doughnut',
        data: { labels: bud.labels, datasets: [{ data: bud.values, backgroundColor: ['#f85149', '#58a6ff'] }]},
        options: { maintainAspectRatio: false, cutout: '75%' }
    };

    Object.keys(configs).forEach(id => new Chart(document.getElementById(id), configs[id]));
}

// LOGIQUE DES BOITES D'INFO
function showInfo(type) {
    const box = document.getElementById('infoBox');
    const title = document.getElementById('boxTitle');
    const text = document.getElementById('boxText');
    
    if(type === 'summary') {
        title.innerText = "Résumé du Projet EcoDash";
        text.innerHTML = "Ce dashboard est une application <b>Single Page (SPA)</b> conçue pour analyser les flux économiques de l'Algérie en 2025. <br><br>Il croise les données du marché pétrolier mondial avec les indicateurs sociaux nationaux (Inflation) et budgétaires (Loi de Finances).";
    } else {
        title.innerText = "Analyse Technique des Graphes";
        text.innerHTML = "• <b>Pétrole</b>: Comparaison Zarzaitine vs Benchmarks mondiaux.<br>• <b>Inflation</b>: Impact direct sur le panier de consommation.<br>• <b>Or/Brent</b>: Analyse de la corrélation en période de crise.<br>• <b>LF2025</b>: Équilibre entre dépenses de fonctionnement et investissements.";
    }
    box.style.display = 'block';
}

function closeBox() { document.getElementById('infoBox').style.display = 'none'; }

// ZOOM FONCTIONNEL
function zoom(id, title) {
    document.getElementById('zoomOverlay').style.display = 'block';
    document.getElementById('zoomTitle').innerText = title;
    const ctx = document.getElementById('zoomCanvas').getContext('2d');
    if (activeZoom) activeZoom.destroy();
    activeZoom = new Chart(ctx, JSON.parse(JSON.stringify(configs[id])));
}

function closeZoom() { document.getElementById('zoomOverlay').style.display = 'none'; }

init();