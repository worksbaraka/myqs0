from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/mobile')
def mobile():
    return render_template('mobile.html')

@app.route('/tablet')
def tablet():
    return render_template('tablet.html')

@app.route('/desktop')
def desktop():
    return render_template('desktop.html')

if __name__ == '__main__':
    app.run(debug=True)
