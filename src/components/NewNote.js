import { useState } from "react";

function NewNote({ handleNewNote }) {

  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  const handleChangeTitle = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleChangeText = (event) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    if (noteTitle.trim().length > 0) {
      handleNewNote(noteTitle, noteText);
      setNoteTitle('');
      setNoteText('');
    }
  };
  return (
    <div className="note new">
      <textarea
        placeholder="Type to add a title..."
        value={noteTitle}
        onChange={handleChangeTitle}
        maxlength="50"
      ></textarea>
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add text..."
        value={noteText}
        onChange={handleChangeText}
        maxlength="200"
      ></textarea>
      <div className="note-footer">
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}
export default NewNote;
