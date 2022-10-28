import { RiDeleteBinFill, RiEdit2Fill } from "react-icons/ri";

function Note({ id, title, text, date, handleDeleteNote,handleEditNote }) {
  return (
    <div className="note">
      <span>
        <div>
          <b>{title}</b>
        </div>

        <span>{text}</span>
      </span>

      <div className="note-footer">
        <small>{date}</small>
        <span>
          <RiDeleteBinFill
            onClick={() => handleDeleteNote(id)}
            className="icons"
            size="1.3em"
          />
          <RiEdit2Fill className="icons" onClick={()=> handleEditNote(id,title,text,date)} size="1.3em" />
        </span>
      </div>
    </div>
  );
}
export default Note;
