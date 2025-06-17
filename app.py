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


from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")  # or your homepage logic

@app.route('/register', methods=['POST'])
def register():
    # your existing form processing logic
    return "Registered successfully"

# no app.run()



from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

# add other routes if needed
