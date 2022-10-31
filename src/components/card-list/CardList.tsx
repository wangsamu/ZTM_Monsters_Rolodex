import React, { Component } from 'react';
import './card-list.styles.css';
import Card from '../card/Card';
import { Monster } from '../../App';

interface CardListProps {
  monstersArray: Monster[];
}

const CardList: React.FC<CardListProps> = (props) => {
  const { monstersArray } = props;

  return (
    <div className='card-list'>
      {monstersArray.map((monster: Monster) => {
        const { id, name, email } = monster;
        return <Card key={id} id={id} name={name} email={email} />;
      })}
    </div>
  );
};

export default CardList;
