import React from "react";
import { RiSearchLine } from "react-icons/ri";

const Search = ({handleSearchNote})=> {
  return (
  <div className="search">
    <RiSearchLine className="search-icons" size="1.3em"/>
  <input onChange={(event)=>handleSearchNote(event.target.value)} type="text" placeholder="type to search..."/>
  </div>
  );
}

export default Search;