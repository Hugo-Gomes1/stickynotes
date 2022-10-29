import { RiDeleteBinFill, RiEdit2Fill } from "react-icons/ri";

function ViewNote({ id, title, text, date, handleDeleteNote, setEditing }) {
  const setToEditState = () => {
    setEditing(true);
  };

  return (
    <div className="note">
      <span>
        <div>
          <b>{title}</b>
        </div>

        <span>{text}</span>
      </span>

      <div className="note-footer">
        <small>{new Date(date).toLocaleString()}</small>
        <span>
          <RiEdit2Fill
            onClick={setToEditState}
            className="icons"
            size="1.3em"
          />
          <RiDeleteBinFill
            onClick={() => handleDeleteNote(id)}
            className="icons"
            size="1.3em"
          />
        </span>
      </div>
    </div>
  );
}
export default ViewNote;
