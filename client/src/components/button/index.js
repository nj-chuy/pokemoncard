import React from "react";

// This file exports button components

const PokeBtn = props => {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

export default PokeBtn;