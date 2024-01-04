import React, { Component } from "react";

import "./item-details.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ItemView from "./item-view";

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

  render() {
    if (!this.state.item) {
      return <span>Please, select a item from a list</span>;
    }

    const content = this.state.loading ? (
      <Spinner />
    ) : (
      <ItemView data={this.state} />
    );

    if (!this.state.item) {
      return;
    }
    return <div className="item-details card">{content}</div>;
  }
}
