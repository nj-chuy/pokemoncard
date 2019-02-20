import React from "react";

const BookCard = props => {
  return (
    <div className="carousel slide">
      <div className="carousel-inner">
        <img src={props.image} className="d-block w-50" alt=""/>
        <div className="desc carousel-item active">
          <h2 className="card-title">{props.title}</h2>
          <h3>{props.author}</h3>
          <h3>{props.description}</h3>
          <h3>{props.set}</h3>
          <button href="#" className="btn btn-primary">
            I choose YOU!
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
