import React, { Component } from "react";

export default class CardList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { monstersArray } = this.props;

    return (
      <div>
        {monstersArray.map((monster) => {
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
