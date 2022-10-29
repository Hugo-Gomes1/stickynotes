import { useState } from "react";
import ViewNote from "./ViewNote";
import EditNote from "./EditNote";

function Note({ id, title, text, date, handleDeleteNote, handleEditNote }) {
  const [isEditing, setEditing] = useState(false);

  if (isEditing) {
    return (
      <EditNote
        id={id}
        title={title}
        text={text}
        handleEditNote={handleEditNote}
        setEditing={setEditing}
      />
    );
  }

  return (
    <ViewNote
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
