import React from "react";

function NoteItemAction({ onDeleteNote, onArchiveNote, id, archived }) {
  return (
    <div className="note-item__action">
      <button
        id={id}
        onClick={() => onDeleteNote(id)}
        aria-label="Delete Button"
      >
        Delete
      </button>
      <button
        id={id}
        onClick={() => onArchiveNote(id)}
        aria-label="Archive Button"
      >
        {archived ? "Unarchive" : "Archive"}
      </button>
    </div>
  );
}

export default NoteItemAction;
