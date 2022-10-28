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


const editNote = (id,title,text,date) => { //1º É DEFINIDA AQUI
  
  
  const editNote = {
    id:id,
    title:title,
    text:text,
    date:date
  }

  console.log(id,title,text,date)



}











  const [searchTitle, setSearchTitle] = useState('');
  <Search handleSearchNote={setSearchTitle}/>

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
    const newNotes = notes.filter((note)=> note.id !== id)
    setNotes(newNotes);
  }

  return (
    <div className="container">
      <Header/>
      <Search handleSearchNote={setSearchTitle}/>
      <NotesGroup 
      notes={notes.filter((note)=>note.title.toLowerCase().includes(searchTitle))}
      handleNewNote={newNote}
      handleDeleteNote={deleteNote}
      
        handleEditNote={editNote} //2º PASSAMOS PARA O NOTESGROUP
      
      
      />
    </div>
  );
}

export default App;
