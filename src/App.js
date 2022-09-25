import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Mulualem", lastName: "Eshetu" },
      company: "IE Networks",
    };
  }

  render() {
    const handleClick = (e) => {
      this.setState(
        //Function
        () =>
          //Parameters and they also optional
          // state, props
          {
            return {
              name: { firstName: "Yosef", lastName: "Worku" },
              company: "Addis Software",
            };
          },
        //Callback and it's optional
        () => {
          console.log(this.state);
        }
      );
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hii {this?.state?.name?.firstName} {this?.state?.name?.lastName}, I
            work at {this?.state?.company}
          </p>
          <button onClick={(e) => handleClick(e)}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
