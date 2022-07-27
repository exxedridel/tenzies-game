import React from "react";
import "../styles/global.scss";
import Die from "./Die.";
import { nanoid } from "nanoid";

const App = () => {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6), // Math.floor(Math.random() * (7 - 1) + 1);
        isHeld: false,
      });
    }
    console.log(newDice);
    return newDice;
  }

  function rollDice(id) {
    setDice((prevState) =>
      prevState.map((die) => {
        return die.isHeld
          ? die
          : {
              ...die,
              id: nanoid(),
              value: Math.ceil(Math.random() * 6),
            };
      })
    );
  }

  function holdDice(id) {
    setDice((prevDice) => {
      return prevDice.map((die) => {
        return id === die.id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      handleClick={() => holdDice(die.id)}
    />
  ));

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={() => rollDice(dice.id)}>
        Roll
      </button>
    </main>
  );
};

export default App;
