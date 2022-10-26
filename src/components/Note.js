import { RiDeleteBinFill, RiEdit2Fill } from "react-icons/ri";

function Note({id,text,date}) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <RiDeleteBinFill className="delete-icon" size="1.3em" />
        <RiEdit2Fill className="edit-icon" size="1.3em" />
      </div>
    </div>
  );
}
export default Note;
