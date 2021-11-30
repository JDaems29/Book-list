import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import BookForm from "./components/BookForm";
import Books from "./components/Books";
import Header from "./components/Header";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/books").then((response) =>
      response.json().then((data) => {
        setBooks(data.Books);
      })
    );
  }, []);

  return (
    <div className="App">
      <Header />
      <Container>
        <BookForm
          onNewBook={(book) =>
            setBooks((currentBooks) => [book, ...currentBooks])
          }
        />
        <Books books={books} />
      </Container>
    </div>
  );
};

export default App;
