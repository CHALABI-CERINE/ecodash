from flask import Flask, render_template, jsonify, send_from_directory
import json
import os

# Explication pour le professeur :
# Ce fichier contient la logique backend de l'application Flask.
# Il gère les routes pour servir la page HTML et les endpoints API pour les données JSON.

app = Flask(__name__)

# Fonction utilitaire pour charger les fichiers JSON contenant les données du projet
def load_json(filename):
    try:
        path = os.path.join(app.root_path, 'data', filename)
        with open(path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        # Gestion d'erreur en cas de fichier manquant
        return {"error": f"Le fichier {filename} est introuvable", "labels": [], "values": []}

# Route principale pour l'affichage du tableau de bord
@app.route('/')
def index():
    return render_template('index.html')

# --- API ENDPOINTS (Routes pour les données) ---

@app.route('/api/petrole')
def get_petrole():
    # Retourne les données concernant le pétrole
    return jsonify(load_json('petrole.json'))

@app.route('/api/inflation')
def get_inflation():
    # Retourne les données concernant l'inflation
    return jsonify(load_json('inflation.json'))

@app.route('/api/refuge')
def get_refuge():
    # Simulation de données si le fichier est manquant ou incomplet pour la démonstration
    data = load_json('refuge.json')
    if "error" in data: 
        # Données par défaut pour éviter le crash de l'interface
        return jsonify({
            "months": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            "gold": [1800, 1850, 1900, 1880, 1950, 2000],
            "brent": [80, 85, 90, 88, 92, 95]
        })
    return jsonify(data)

@app.route('/api/budget')
def get_budget():
    # Retourne les données budgétaires
    return jsonify(load_json('budget.json'))

# Route spécifique pour servir les fichiers statiques si nécessaire
@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)

if __name__ == '__main__':
    # Lancement de l'application en mode debug
    app.run(debug=True, port=5000)