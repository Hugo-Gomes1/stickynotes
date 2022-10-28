import { useState } from "react";

function EditNote({handleEditNote,id,title,text,date})  {



   
    const [noteTitle, setNoteTitle] = useState(title);
    const [noteText, setNoteText] = useState(text);
   




  const handleChangeTitle = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleChangeText = (event) => {
    setNoteText(event.target.value);
  };



  


  const handleSaveClick = () => {

    if (noteTitle.trim().length > 0) {
      handleEditNote(id,noteTitle, noteText,date);
      setNoteTitle("");
      setNoteText("");
    }
    
  };




  return (
    <div className="note edit">
      <textarea
        placeholder="Type to add a title..."
        value={noteTitle}
        onChange={handleChangeTitle}
        maxLength="50"
      ></textarea>
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add text..."
        value={noteText}
        onChange={handleChangeText}
        maxLength="200"
      ></textarea>
      <div className="note-footer">
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditNote;
