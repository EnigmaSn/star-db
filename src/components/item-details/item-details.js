import React, { Component } from "react";

import "./item-details.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ItemView from "./item-view";
import ErrorButton from "../error-button";

export const Record = ({ item, field, label }) => {
  console.log(item);
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
    loading: true,
  };

  componentDidMount = () => {
    this.updateItem();
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  };

  onItemLoaded = () => {
    this.setState({
      loading: false,
    });
  };

  updateItem = () => {
    this.setState({ loading: true });
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId).then((item) => {
      this.onItemLoaded();
      this.setState({
        item,
        image: getImageUrl(itemId),
      });
    });
  };

  // TODO пробросить children в item-view
  // render() {
  //   const children = this.props.children;
  //   if (!this.state.item) {
  //     return <span>Please, select a item from a list</span>;
  //   }
  //   console.log("children", children);

  //   const content = this.state.loading ? (
  //     <Spinner />
  //   ) : (
  //     <ItemView data={this.state}>text</ItemView>
  //   );

  //   if (!this.state.item) {
  //     return;
  //   }
  //   return <div className="item-details card">{content}</div>;
  // }

  render() {
    const { item, image } = this.state;
    if (!item) {
      return <span>Select a item from a list</span>;
    }

    const { id, name, gender, birthYear, eyeColor } = item;

    return (
      <div className="item-details card">
        <img className="item-image" src={image} alt="item" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}
