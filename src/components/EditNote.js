import { useState } from "react";

function EditNote({ id, title, text, handleEditNote, setEditing }) {
  const [noteText, setNoteText] = useState(text);
  const [noteTitle, setNoteTitle] = useState(title);

  const handleChangeTitle = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleChangeText = (event) => {
    setNoteText(event.target.value);
  };

  const saveEdit = (id, noteTitle, noteText) => {
    if (noteTitle.trim().length > 0) {
      handleEditNote(id, noteTitle, noteText);
      setEditing(false);
    }
  };

  return (
    <div className="note new">
      <textarea
        value={noteTitle}
        onChange={handleChangeTitle}
        maxLength="200"
      ></textarea>
      <textarea
        rows="8"
        cols="10"
        value={noteText}
        onChange={handleChangeText}
        maxLength="200"
      ></textarea>
      <div className="note-footer">
        <button className="buttons" onClick={() => setEditing(false)}>
          Cancel
        </button>
        <button
          className="buttons"
          onClick={() => saveEdit(id, noteTitle, noteText)}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditNote;
