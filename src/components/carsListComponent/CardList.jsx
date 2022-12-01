import { Component } from "react";
import Card from "../cardComponent/card";
import "./card-list.styles.css";

class CardList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { monsters } = this?.props;
    return (
      <div className="card-list">
        {monsters?.length !== 0 ? (
          monsters?.map((monster) => {
            const { id, name, email } = monster;
            return <Card monster={monster} />;
          })
        ) : (
          <h1>Noting to found</h1>
        )}
      </div>
    );
  }
}

export default CardList;
