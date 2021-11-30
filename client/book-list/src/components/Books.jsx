import React from "react";
import { Header, List } from "semantic-ui-react";
import Rating from "@mui/material/Rating";

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
            <Rating value={book.rating} name="read-only" readOnly />
          </List.Item>
        );
      })}
    </List>
  );
};

export default Books;
