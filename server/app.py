from flask import Flask
from api_v1 import views

app = Flask(__name__)
app.register_blueprint(views, url_prefix='/api/v1')

if __name__ == "__main__":
    app.run(debug=True)
