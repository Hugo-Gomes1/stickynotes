import NotesGroup from "./components/NotesGroup";
import { nanoid } from "nanoid";
import { useState } from "react";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note",
      date: "26/10/2022",
    },
    {
      id: nanoid(),
      text: "this is my second note",
      date: "27/10/2022",
    },
    {
      id: nanoid(),
      text: "this is my third note",
      date: "28/10/2022",
    },
  ]);

  const [searchText, setSearchText] = useState('');
  <Search handleSearchNote={setSearchText}/>

  const newNote = (text) =>{
    const date = new Date();
    const newNote={
      id: nanoid(),
      text:text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id)
    setNotes(newNotes);
  }

  return (
    <div className="container">
      <Header/>
      <Search handleSearchNote={setSearchText}/>
      <NotesGroup 
      notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
      handleNewNote={newNote}
      handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
