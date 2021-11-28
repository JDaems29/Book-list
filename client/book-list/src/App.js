import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    {
      fetch("/books").then((response) =>
        response.json().then((data) => {
          setBooks(data.books);
        })
      );
    }
  }, []);

  return null;
};

export default App;
