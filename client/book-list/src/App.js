import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import BookForm from "./components/BookForm";
import Books from "./components/Books";

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
      <Container>
        <BookForm />
        <Books books={books} />
      </Container>
    </div>
  );
};

export default App;
