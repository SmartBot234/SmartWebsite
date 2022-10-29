from flask import Flask, render_template, redirect, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html"), 200

@app.route("/privacy")
def privacy():
    return render_template("privacy.html"), 200

@app.route("/terms")
def terms():
    return render_template("tos.html"), 200

@app.route("/invite")
def invite():
    return redirect("https://discord.com/oauth2/authorize?client_id=810526674025316412&permissions=1541826673911&scope=bot%20applications.commands"), 200

@app.route("/invite/admin")
def inviteadmin():
    return redirect("https://discord.com/oauth2/authorize?client_id=810526674025316412&permissions=8&scope=bot%20applications.commands"), 200

@app.route("/support")
def support():
    return redirect("https://discord.com/invite/9e9TG64Cqn"), 200

@app.errorhandler(404)
def not_found(e):
    return render_template('404.html', value=request.base_url), 200

app.run(host="0.0.0.0", port=8080)
