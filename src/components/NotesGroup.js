import Note from "./Note";
import NewNote from "./NewNote";

function NotesGroup({ notes, handleNewNote, handleDeleteNote}) {
  return (
    <div className="notes-group">
      {notes.map((note) => (
        <Note 
        id={note.id} 
        text={note.text}
        date={note.date}
        handleDeleteNote = {handleDeleteNote}
        />
      ))}
      <NewNote handleNewNote={handleNewNote} />
    </div>
  );
}

export default NotesGroup;
