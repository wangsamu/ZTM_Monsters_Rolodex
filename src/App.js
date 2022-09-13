import "./App.css";
import { Component, useState, useEffect } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (e) => {
    // setState({ searchField: e.target.value.toLowerCase() });
    setSearchField(e.target.value.toLowerCase());
  };

  const filteredArray = monsters.filter((m) => {
    return m.name.toLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
      />
      <CardList monstersArray={filteredArray} />
    </div>
  );
}

export default App;
