import React from "react";
import ErrorButton from "../error-button";

const ItemView = ({ data }) => {
  const { id, name, gender, birthYear, eyeColor } = data.item;
  const { image } = data;

  return (
    <>
      <img className="item-image" alt="item" src={image} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {/* {this.props.children} */}
          {/* {React.Children.map(this.props.children, (child, idx) => {
            return child;
          })} */}
        </ul>
        <ErrorButton />
      </div>
    </>
  );
};

export default ItemView;
