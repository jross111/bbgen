import React, { useState } from 'react';
import './App.css';



function SquareForm({ addSquare }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addSquare(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}



function App() {

  const [squares, setSquares] = useState([
    { text: "hi" },
    { text: "bye" },
    { text: "ok" },
    { text: "yes" }
  ]);

  const addSquare = text => {
    const newSquares = [...squares, { text }];
    setSquares(newSquares);
  }

  const Square = ({ square }) => <div>{square.text}</div>

  return (
    <div className="App">
      < SquareForm addSquare={addSquare} />
      <div className="wrapper">
        <div className="game-name"><h1>Bingo</h1></div>
        {squares.map((square, index) => (
          <div className="item">
            <Square
              key={index}
              index={index}
              square={square}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
