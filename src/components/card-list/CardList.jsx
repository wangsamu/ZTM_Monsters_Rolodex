import React, { Component } from "react";

export default class CardList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { filteredArray } = this.props;

    return (
      <div>
        {filteredArray.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
