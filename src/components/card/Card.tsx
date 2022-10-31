import React, { Component } from 'react';
import './card.styles.css';

interface CardProps {
  id: number;
  name: string;
  email: string;
}

export const Card: React.FC<CardProps> = (props) => {
  const { id, name, email } = props;
  return (
    <div className='card-container' key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
