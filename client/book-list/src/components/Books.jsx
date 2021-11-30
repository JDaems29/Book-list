import React from "react";
import { Header, List, Rating } from "semantic-ui-react";

const Books = ({ books }) => {
  return (
    <List>
      {books.map((book) => {
        return (
          <List.Item key={book.name}>
            <Header as="h3">{book.name}</Header>
            <p className="book_author">{book.author}</p>
            <p className="book_genre">{book.genre}</p>
            <p className="book_originally_published">
              {book.originally_published}
            </p>
            <p className="book_rating">{book.rating}/5</p>
          </List.Item>
        );
      })}
    </List>
  );
};

export default Books;
