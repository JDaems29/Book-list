from flask import Flask, app
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

books = {"Twilight": {"Author": "Stephenie Meyer",
                      "Genre": "Romance", "Pages": 384},
         "Our Final Invention": {"Author": "James Barrat", "Genre": "Technology", "Pages": 336}}


class operations(Resource):
    def get(self):
        return{"data": "Hello There"}


api.add_resource(operations, "/")


if __name__ == "__main__":
    app.run(debug=True)
