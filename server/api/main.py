from flask import Flask, app
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

books = [{"Title": "Twilight", "Author": "Stephenie Meyer",
          "Genre": "Romance", "Pages": 384},
         {"Title": "Our Final Invention", "Author": "James Barrat", "Genre": "Technology", "Pages": 336}]


class Book(Resource):
    def get(self):
        return{"data": "Hello There"}

    def put(self):
        return("")


api.add_resource(Book, "/")


if __name__ == "__main__":
    app.run(debug=True)
