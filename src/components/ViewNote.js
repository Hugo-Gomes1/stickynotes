import React from "react";
import { RiDeleteBinFill, RiEdit2Fill, RiPrinterFill } from "react-icons/ri";

function ViewNote({ id, title, text, date, handleDeleteNote, setEditing }) {
  const setToEditState = () => {
    setEditing(true);
  };

  const printNote = React.useRef();
  const handlePrintClick = () => {
    const w = window.open();
    if (printNote.current?.innerHTML) {
      w?.document.write(printNote.current.innerHTML);
      w?.print();
    }
    w?.close();
  };

  return (
    <div className="note">
      <span ref={printNote}>
        <div>
          <b>{title}</b>
        </div>

        <span>{text}</span>
      </span>

      <div className="note-footer">
        <small>{new Date(date).toLocaleString()}</small>
        <span>
          <RiPrinterFill
            className="icons"
            size="1.3em"
            onClick={handlePrintClick}
          />
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
