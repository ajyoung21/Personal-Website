from flask import Flask, render_template, redirect, jsonify
from flask_pymongo import PyMongo
import pymongo
import os

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/about_us")
def about():
    return render_template("contact_information.html")

@app.route("/data_table")
def data_table():
    return render_template("data_table.html")

@app.route("/visuals")
def globe():
    return render_template("visuals.html")

if __name__ == '__main__':
	port = int(os.environ.get('PORT', 5000))
	app.run(host='0.0.0.0', port=port)
    #app.run(debug=True)