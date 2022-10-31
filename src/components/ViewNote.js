import React, { useState, useRef } from "react";
import {
  RiDeleteBinFill,
  RiEdit2Fill,
  RiPrinterFill,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";

function ViewNote({ id, title, text, date, handleDeleteNote, setEditing }) {
  const [open, setOpen] = useState(true);

  const detailsHandler = () => {
    setOpen((current) => !current);
  };

  const setToEditState = () => {
    setEditing(true);
  };

  const printNote = useRef();
  const handlePrintClick = () => {
    const w = window.open();
    if (printNote.current?.innerHTML) {
      w?.document.write("<h1>"+ title +"</h1>");
      w?.document.write(text);
      w?.print();
    }
    w?.close();
  };

  return (
    <div className="note">
      <span ref={printNote}>
        <div>
          <b>{title}</b>
          {open ? (
            <RiEyeOffLine
              className="icons"
              size="1.3em"
              onClick={detailsHandler}
            />
          ) : (
            <RiEyeLine
              className="icons"
              size="1.3em"
              onClick={detailsHandler}
            />
          )}
        </div>

        <span>{open ? text : ""}</span>
      </span>

      <div className={open ? "note-footer-show" : "note-footer-hide"}>
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
