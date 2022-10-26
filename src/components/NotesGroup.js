import Note from "./Note";
import NewNote from "./NewNote";

function NotesGroup({ notes, handleNewNote}) {
  return (
    <div className="notes-group">
      {notes.map((note) => (
        <Note 
        key={note.id} 
        text={note.text}
        date={note.date}
        />
      ))}
      <NewNote handleNewNote={handleNewNote} />
    </div>
  );
}

export default NotesGroup;
