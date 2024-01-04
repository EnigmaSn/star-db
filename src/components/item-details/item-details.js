import React, { Component } from "react";

import "./item-details.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ItemView from "./item-view";

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
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
    const { itemId } = this.props;

    if (!itemId) {
      return;
    }

    this.swapiService.getPerson(itemId).then((item) => {
      this.onItemLoaded(item);
      this.setState({ item });
    });
  };

  render() {
    if (!this.state.item) {
      return <span>Please, select a item from a list</span>;
    }

    const content = this.state.loading ? (
      <Spinner />
    ) : (
      <ItemView item={this.state.item} />
    );

    return <div className="item-details card">{content}</div>;
  }
}
