import React, { useState } from "react";
import { Button, Form, FormField, Input, Label } from "semantic-ui-react";
import Rating from "@mui/material/Rating";

const BookForm = ({ onNewBook }) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState(Number);

  return (
    <Form>
      <Form.Field required>
        <Label name={name}>Book Name</Label>
        <Input
          placeholder="Book Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Field>
      <Form.Field required>
        <Label name={author}>Author</Label>
        <Input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </Form.Field>
      <Form.Field required>
        <Input
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </Form.Field>
      <Form.Field required>
        <Rating
          name="simple-controlled"
          onChange={(_, data) => {
            const numRating = data;
            setRating(numRating);
          }}
          value={rating}
        />
      </Form.Field>
      <FormField>
        <Button
          onClick={async () => {
            const book = { name, author, genre, rating };
            const response = await fetch("/add_book", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(book),
            });

            if (response.ok) {
              console.log("response worked!");
              onNewBook(book);
              setName("");
              setAuthor("");
              setGenre("");
              setRating(1);
            }
          }}
        >
          submit
        </Button>
      </FormField>
    </Form>
  );
};

export default BookForm;
