import React, { useState } from "react";
import { Form, Input } from "semantic-ui-react";
import Rating from "@mui/material/Rating";

const BookForm = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publishDate, setPublishDate] = useState();
  const [rating, setRating] = useState();

  return (
    <Form>
      <Form.Field>
        <Input
          placeholder="Book Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Input
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Input
          placeholder="Original Publish Date"
          value={publishDate}
          onChange={(e) => setPublishDate(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Rating
          name="simple-controlled"
          onChange={(data) => {
            setRating(data);
          }}
          value={rating}
        />
      </Form.Field>
    </Form>
  );
};

export default BookForm;
