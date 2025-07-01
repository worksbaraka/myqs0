from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/mobile')
def mobile():
    return render_template('mobile.html')

@app.route('/tablet')
def tablet():
    return render_template('tablet.html')

@app.route('/desktop')
def desktop():
    return render_template('desktop.html')

@app.route('/register', methods=['POST'])
def register():
    # your form processing logic here
    return "Registered successfully"

@app.route('/slides')
def slides():
    return render_template('slides.html')  # your HTML above goes in slides.html


# ✅ Required for Vercel to work
application = app

if __name__ == "__main__":
    app.run(debug=True)
