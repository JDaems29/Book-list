import React, { useState, useEffect } from "react";
import "./App.css";
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

  console.log(books);

  return (
    <div className="App">
      <Books books={books} />
    </div>
  );
};

export default App;
