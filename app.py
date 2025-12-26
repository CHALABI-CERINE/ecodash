from flask import Flask, render_template, jsonify
import json
import os

app = Flask(__name__)

def load_json(filename):
    path = os.path.join(app.root_path, 'data', filename)
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/petrole')
def get_petrole():
    return jsonify(load_json('petrole.json'))

@app.route('/api/inflation')
def get_inflation():
    return jsonify(load_json('inflation.json'))

@app.route('/api/refuge')
def get_refuge():
    return jsonify(load_json('refuge.json'))

@app.route('/api/budget')
def get_budget():
    return jsonify(load_json('budget.json'))

if __name__ == '__main__':
    app.run(debug=True, port=5000)