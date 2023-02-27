from flask import Flask, render_template, jsonify
from database import DataBase
from generate_js import generate_js

app = Flask(__name__, static_folder="static")
db = DataBase()

def load_data():
    data = db.get_data()
    generate_js(data)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/js')
def js():
    return render_template("js.html")

@app.route('/first-chart')
def first_chart():
    return render_template("int_ext_data.html")

@app.route('/ajax')
def ajax():
    return render_template("ajax.html")


@app.route('/get_data', methods=['POST'])
def get_data():
    response = db.get_data()
    return jsonify(response)


if __name__ == "__main__":
    load_data()
    app.run(host="localhost", debug = True)