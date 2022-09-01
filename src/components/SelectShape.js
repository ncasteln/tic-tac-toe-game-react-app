import React, { useState } from "react";
import Board from "./Board";

const SelectShape = () => {
  const [shapes, setShapes] = useState();

  const setPlayerCPUShapes = (e) => {
    e.preventDefault();
    if (e.target.textContent === 'X') {
      setShapes({
        player: 'X',
        CPU: 'O'
      })
    } else {
      setShapes({
        player: 'O',
        CPU: 'X',
      })
    }
  }

  return (
    <div>
      {!shapes
        ? <form className="SelectShape">
            <label>What are you going to play?</label>
            <button className="button X" onClick={setPlayerCPUShapes}>X</button>
            <button className="button O" onClick={setPlayerCPUShapes}>O</button>
          </form>
        : <Board shapes={shapes} />}
    </div>
  )
}

export default SelectShape;