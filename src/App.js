import NotesGroup from "./components/NotesGroup";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([]);

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
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: date.toLocaleDateString(),
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
      />
    </div>
  );
}

export default App;
