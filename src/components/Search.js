import React from "react";
import { RiSearchLine } from "react-icons/ri";

const Search = ({handleSearchNote})=> {
  return (
  <div className="search">
    <RiSearchLine size="1.3em"/>
  <input onChange={(event)=>handleSearchNote(event.target.value)} type="text" placeholder=" Type to search (by title)..."/> 
  </div>
  );
}

export default Search;