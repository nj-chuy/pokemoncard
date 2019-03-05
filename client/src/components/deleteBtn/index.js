import React from "react";
import "./DeleteBtn.css";

// This file exports button components

const DeleteBtn = props => {
       return (
        <button className="delete-btn" {...props} role="button" tabIndex="0">
        Remove Card
      </button>
   );
 }

export default DeleteBtn;