import Note from "./Note";
import NewNote from "./NewNote";

function NotesGroup({
  notes,
  handleNewNote,
  handleDeleteNote,
  handleEditNote,
}) {
  return (
    //3º PASSAMOS PARA O EditNote (LINHA 9)
    <div className="notes-group">
      <NewNote handleNewNote={handleNewNote} />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={handleEditNote}
        />
      ))}
    </div>
  );
}

export default NotesGroup;
