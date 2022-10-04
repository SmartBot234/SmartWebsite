from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/privacy")
def privacy():
    return render_template("privacy.html")

@app.route("/terms")
def terms():
    return render_template("tos.html")

@app.route("/invite")
def invite():
    return redirect("https://discord.com/oauth2/authorize?client_id=810526674025316412&permissions=1541826673911&scope=bot%20applications.commands")

@app.route("/invite/admin")
def inviteadmin():
    return redirect("https://discord.com/oauth2/authorize?client_id=810526674025316412&permissions=8&scope=bot%20applications.commands")

@app.route("/support")
def support():
    return redirect("https://discord.com/invite/9e9TG64Cqn")

app.run(host="0.0.0.0", port=8080)