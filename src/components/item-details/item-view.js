import React from "react";
import ErrorButton from "../error-button";

const ItemView = ({ data }) => {
  console.log("content", data);
  console.log("item", data.item);
  console.log("image", data.image);

  const { id, name, gender, birthYear, eyeColor } = data.item;
  const { image } = data;

  return (
    <>
      <img className="item-image" alt="item" src={image} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
    </>
  );
};

export default ItemView;
