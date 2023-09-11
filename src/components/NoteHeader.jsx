import React from "react";
import Input from "./Input";

function NoteHeader({ search, setQuery }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <img src="" alt="" />
      <div className="note-search">
        <Input
          type="search"
          name="search_note"
          id="search_note"
          value={search}
          onChange={setQuery}
          placeholder="Find ur notes ..."
        />
      </div>
    </div>
  );
}

export default NoteHeader;
