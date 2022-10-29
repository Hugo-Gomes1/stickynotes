import NotesGroup from "./components/NotesGroup";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([]);

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

  const [searchTitle, setSearchTitle] = useState("");
  <Search handleSearchNote={setSearchTitle} />;

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

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

  return (
    <div className="container">
      <Header />
      <Search handleSearchNote={setSearchTitle} />
      <NotesGroup
        notes={notes.filter((note) =>
          note.title.toLowerCase().includes(searchTitle)
        )}
        handleNewNote={newNote}
        handleDeleteNote={deleteNote}
        handleEditNote={editNote} //2º PASSAMOS PARA O NOTESGROUP
      />
    </div>
  );
}

export default App;
