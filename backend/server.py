from flask import Flask
import firebase

app = Flask(__name__)

@app.route("/")

def main(): 
    a ="mmb"
    return a

if __name__ == "__main__":
    app.debug = True
    app.run()