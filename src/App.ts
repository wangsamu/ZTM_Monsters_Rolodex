import './App.css';
import { Component, useState, useEffect } from 'react';
import CardList from './components/card-list/CardList';
import { SearchBox } from './components/search-box/SearchBox';
import { Interface } from 'readline';

Interface Monster {

}

function App() {
  const [monsters, setMonsters] = useState([]);
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

  const onSearchChange = (e) => {
    const inputText = e.target.value.toLowerCase();
    setSearchField(inputText);
  };

  const onUselessTextChange = (e) => {
    const inputText = e.target.value.toLowerCase();
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
}

export default App;
