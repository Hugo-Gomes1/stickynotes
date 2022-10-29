import { RiDeleteBinFill, RiEdit2Fill } from "react-icons/ri";
import { useState } from "react";

function EditingTemplate({ id, title, text, handleEditNote, setEditing }) {
  const [noteText, setNoteText] = useState(text);
  const [noteTitle, setNoteTitle] = useState(title);

  const handleChangeTitle = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleChangeText = (event) => {
    setNoteText(event.target.value);
  };

  const endEdit = (id, noteText, text) => {
    handleEditNote(id, noteText, text);
    setEditing(false);
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
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
        <button className="save" onClick={() => setEditing(false)}>
          Cancel
        </button>
        <button
          className="save"
          onClick={() => endEdit(id, noteTitle, noteText)}
        >
          Save
        </button>
      </div>
    </div>
  );
}

function ViewTemplate({ id, title, text, date, handleDeleteNote, setEditing }) {
  const setToEditState = () => {
    setEditing(true);
  };

  return (
    <div className="note">
      <span>
        <div>
          <b>{title}</b>
        </div>

        <span>{text}</span>
      </span>

      <div className="note-footer">
        <small>{new Date(date).toLocaleString()}</small>
        <span>
          <RiDeleteBinFill
            onClick={() => handleDeleteNote(id)}
            className="icons"
            size="1.3em"
          />
          <RiEdit2Fill
            onClick={setToEditState}
            className="icons"
            size="1.3em"
          />
        </span>
      </div>
    </div>
  );
}

function Note({ id, title, text, date, handleDeleteNote, handleEditNote }) {
  const [isEditing, setEditing] = useState(false);

  if (isEditing) {
    return (
      <EditingTemplate
        id={id}
        title={title}
        text={text}
        handleEditNote={handleEditNote}
        setEditing={setEditing}
      />
    );
  }

  return (
    <ViewTemplate
      id={id}
      title={title}
      text={text}
      date={date}
      handleDeleteNote={handleDeleteNote}
      setEditing={setEditing}
    />
  );
}
export default Note;
