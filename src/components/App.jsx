import React from "react";
import "../styles/global.scss";
import Die from "./Die.";

const App = () => {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
      // newDice.push(Math.floor(Math.random() * (7 - 1) + 1));
    }
    return newDice;
  }

  const diceElements = dice.map((die) => <Die value={die} />);

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
    </main>
  );
};

export default App;
