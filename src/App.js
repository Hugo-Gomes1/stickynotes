import NotesGroup from "./components/NotesGroup";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import Search from "./components/Search";

function App() {

  const [notes, setNotes] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const editNote = (id, title, text) => {
    const editNote = notes.map((note) => {
      if (id === note.id) {
        return {
          ...note,
          title: title,
          text: text,
          date: new Date().toISOString(),
        };
      }
      return note;
    });

    setNotes(editNote);
  };

  const newNote = (title, text) => {
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: new Date().toISOString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };



  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("app-data", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="container">
      <div className="header">
        <h1>Notes</h1>
      </div>
      <Search handleSearchNote={setSearchTitle} />
      <NotesGroup
        notes={notes.filter((note) =>
          note.title.toLowerCase().includes(searchTitle)
        )}
        handleNewNote={newNote}
        handleDeleteNote={deleteNote}
        handleEditNote={editNote}
      />
    </div>
  );
}

export default App;
