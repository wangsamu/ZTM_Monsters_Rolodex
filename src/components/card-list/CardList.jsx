import React, { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/Card";

function CardList(props) {
  const { monstersArray } = props;

  return (
    <div className="card-list">
      {monstersArray.map((monster) => {
        const { id, name, email } = monster;
        return <Card key={id} id={id} name={name} email={email} />;
      })}
    </div>
  );
}

export default CardList;
