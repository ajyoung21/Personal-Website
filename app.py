from flask import Flask, render_template, redirect, jsonify
from flask_pymongo import PyMongo
import pymongo
import os

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/podcast")
def podcast():
    return render_template("podcast.html")

@app.route("/resume")
def resume():
    return render_template("resume.html")

@app.route("/contact")
def about():
    return render_template("contact.html")


@app.route("/music_tier_list")
def music():
    return render_template("music_tier_list.html")

@app.route("/video_game_tier_list")
def video_game():
    return render_template("video_game_tier_list.html")

@app.route("/year_end_lists/2020_songs")
def twentytwentysongs():
    return render_template("year_end_lists/2020_songs.html")

@app.route("/year_end_lists/2020_albums")
def twentytwentyalbums():
    return render_template("year_end_lists/2020_albums.html")

@app.route("/year_end_lists/2020_games")
def twentytwentygames():
    return render_template("year_end_lists/2020_games.html")

@app.route("/year_end_lists")
def year_end_lists():
    return render_template("year_end_lists/landing_page.html")


@app.route("/visuals")
def globe():
    return render_template("visuals.html")

if __name__ == '__main__':
	port = int(os.environ.get('PORT', 5000))
	app.run(host='0.0.0.0', port=port)
    #app.run(debug=True)