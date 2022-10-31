import { Component } from "react";

class CardList extends Component {
  //   constructor() {
  //     super();
  //     this.state = { monsters: this.props?.monsters };
  //   }

  render() {
    const { monsters } = this?.props;

    return (
      <div>
        {monsters?.length !== 0 ? (
          monsters?.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })
        ) : (
          <h1>Noting to found</h1>
        )}
      </div>
    );
  }
}

export default CardList;
