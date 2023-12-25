"""
THIS IS DOC
"""
import random
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template('app.html')

@app.route('/getcolor', methods=['POST'])
def get_color():
    # red = random.randint(0, 255)
    # green = random.randint(0, 255)
    # blue = random.randint(0, 255)

    red_1 = random.randint(0, 127)
    red_2 = random.randint(0, 127)
    red = red_1 + red_2

    green_1 = random.randint(0, 127)
    green_2 = random.randint(0, 127)
    green = green_1 + green_2

    blue_1 = random.randint(0, 127)
    blue_2 = random.randint(0, 127)
    blue = blue_1 + blue_2

    alpha = 1

    color = f"rgba({red}, {green}, {blue}, {alpha})"

    return color
