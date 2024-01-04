import React, { Component } from "react";

import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";
import ErrorBoundry from "../error-boundry/error-boundry";

import "./people-page.css";

export default class PeoplePage extends Component {
  state = {
    selectedItem: null,
    hasError: false,
  };

  swapiService = new SwapiService();

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
  }

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={(item) => {
          return `${item.name} (${item.gender})`;
        }}
      />
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedItem} />
      </ErrorBoundry>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}
