import './App.css';
import React, { Component, useState, useEffect } from 'react';
import CardList from './components/card-list/CardList';
import { SearchBox } from './components/search-box/SearchBox';

export interface Monster {
  id: number;
  name: string;
  email: string;
}

const App: React.FC = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState('');
  const [uselessText, setUselessText] = useState('');
  const [filteredArray, setFilteredArray] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const filteredSelection = monsters.filter((m) => {
      return m.name.toLowerCase().includes(searchField);
    });
    console.log("I'm being rebuild again! But should I?");

    setFilteredArray(filteredSelection);
  }, [monsters, searchField]);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const inputText = event.target.value.toLowerCase();
    setSearchField(inputText);
  };

  const onUselessTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value.toLowerCase();
    setUselessText(inputText);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        className='search-box'
        onChangeHandler={onSearchChange}
        placeholder='Search Monsters'
      />
      <SearchBox
        className='search-box'
        onChangeHandler={onUselessTextChange}
        placeholder='insert useless text here'
      />
      <CardList monstersArray={filteredArray} />
    </div>
  );
};

export default App;
