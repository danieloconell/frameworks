from flask import Flask

app = Flask(__name__)


@app.route("/greet/<string:name>")
def greet(name: str):
    return f"Hello {name}"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
