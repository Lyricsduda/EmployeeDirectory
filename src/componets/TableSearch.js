import React from "react";
import "../styles/TableSearch.css";

const TableSearch = (props) => {

  return (
    <div className="d-flex justify-content-center mx-auto">
      <form>
        <input
          placeholder="Search"
          name="search"
          type="text"
          className="form-control-lg search-font mx-auto"
          onChange={(event) => props.startSort(event)}
        />
      </form>
    </div>
  );
}

export default TableSearch;