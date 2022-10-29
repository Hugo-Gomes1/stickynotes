import NotesGroup from "./components/NotesGroup";
import { nanoid } from "nanoid";
import { useState } from "react";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "this is my first note",
      text: "this is text one",
      date: "26/10/2022",
    },
    {
      id: nanoid(),
      title: "this is my second note",
      text: "this is text two",
      date: "27/10/2022",
    },
    {
      id: nanoid(),
      title: "this is my third note",
      text: "this is text three",
      date: "28/10/2022",
    },
  ]);

  const editNote = (id, title, text) => {
    console.log(id)
    const editNote = notes.map((note) => {
      if (id === note.id) {
        return {
          ...note,
          title: title,
          text: text,
          date: new Date(),
        };
      }
      return note;
    });
    console.log(editNote)
    setNotes(editNote);
  };

  const [searchTitle, setSearchTitle] = useState("");
  <Search handleSearchNote={setSearchTitle} />;

  const newNote = (title, text) => {
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: new Date(),
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
