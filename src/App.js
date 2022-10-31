import "./App.css";
import { Component } from "react";
import CardList from "./components/carsListComponent/CardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchInput: "",
    };
  }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) =>
    //     this.setState(
    //       () => {
    //         return { monsters: users };
    //       },
    //       () => {
    //         console.log(this.state);
    //       }
    //     )
    //   );
    this.setState(
      () => {
        return {
          monsters: [
            { id: 1, name: "Nardi" },
            { id: 2, name: "Kira" },
            { id: 3, name: "Sura" },
            { id: 4, name: "Zemen" },
            { id: 5, name: "Abdu" },
            { id: 6, name: "Abrish" },
            { id: 7, name: "Mule" },
          ],
        };
      },
      () => {
        console.log(this.state);
      }
    );
  }

  //Instead of using anonyms function and make react to call it every time it's good to declare method or function and
  //react will build it up once while the component is render.
  onSearchChange = (event) => {
    const searchInput = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchInput };
    });
  };

  render() {
    //Instead of using this and this.state we can destructure it using ES6 destructuring method
    //it will make us to write readable and clean code.
    const { monsters, searchInput } = this.state;
    const { onSearchChange } = this;

    const filteredMonster = monsters?.filter((monster) => {
      return monster?.name?.toLowerCase()?.includes(searchInput);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
