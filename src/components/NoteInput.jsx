import React from "react";
import { useState } from "react";
import Input from "./Input";

function NoteInput({ setNotes }) {
  const [title, setTittle] = useState("");
  const [body, setBody] = useState("");

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    const timestamp = new Date().toISOString();

    setNotes((notes) => [
      ...notes,
      {
        id: timestamp,
        title: title,
        body: body,
        archived: false,
        createdAt: timestamp,
      },
    ]);
  };

  return (
    <div className="note-input">
      <h2>New Notes</h2>
      <form onSubmit={onSubmitEventHandler}>
        <p className="note-input__title__char-limit">
          Character left : {50 - title.length}
        </p>
        <Input
          value={title}
          onChange={setTittle}
          id="title"
          name="title"
          type="text"
          placeholder="Input ur note title ..."
          required
        />
        <Input
          value={body}
          onChange={setBody}
          id="body"
          name="body"
          type="textarea"
          placeholder="Write your note here ..."
          required
        />
        <button type="submit">Create Note</button>
      </form>
    </div>
  );
}

export default NoteInput;
