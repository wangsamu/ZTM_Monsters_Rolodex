import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/CardList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value.toLowerCase() });
  };

  render() {
    console.log("render");
    const { searchField, monsters } = this.state;
    const { onSearchChange } = this;

    const filteredArray = monsters.filter((m) => {
      return m.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="serach-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        <CardList filteredArray={filteredArray} />
      </div>
    );
  }
}

export default App;
