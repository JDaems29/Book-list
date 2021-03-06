from enum import unique
from flask import Flask, app
from flask.globals import request
from flask_restful import Api, Resource
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql.expression import false, true


app = Flask(__name__)
api = Api(app)


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'

db = SQLAlchemy(app)


class Books(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=true, nullable=false)
    author = db.Column(db.String(80))
    genre = db.Column(db.String(80))
    rating = db.Column(db.Integer)

    def __repr__(self):
        return f"{self.name} - {self.author} - {self.genre} - {self.rating}"


@app.route("/")
def index():
    return "Hello!"


@app.route("/books")
def get_books():
    books = Books.query.all()

    output = []

    for book in books:
        book_data = {"name": book.name, "author": book.author,
                     "genre": book.genre, "rating": book.rating}
        output.append(book_data)

    return {"Books": output}


@app.route("/books/<id>")
def get_book(id):
    book = Books.query.get_or_404(id)
    return {"name": book.name, "author": book.author,
            "genre": book.genre, "rating": book.rating}


@app.route("/add_book", methods=["POST"])
def add_book():
    book_data = request.get_json()

    new_book = Books(name=book_data["name"], author=book_data["author"],
                     genre=book_data["genre"], rating=book_data["rating"])

    db.session.add(new_book)
    db.session.commit()

    return 'done', 201


if __name__ == "__main__":
    app.run(debug=True)
