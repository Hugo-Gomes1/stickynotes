import Note from "./Note";
import NewNote from "./NewNote";

function NotesGroup({ notes, handleNewNote, handleDeleteNote}) {
  return (
    <div className="notes-group">
      <NewNote handleNewNote={handleNewNote} />
      {notes.map((note) => (
        <Note
          id={note.id}
          title={note.title}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
    </div>
  );
}

export default NotesGroup;
