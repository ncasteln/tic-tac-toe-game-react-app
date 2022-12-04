import React, { useEffect, useState } from "react";
import Square from "./Square";
import EndGame from "./EndGame";

const Board = ({ shapes }) => {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [isCPUturn, setCPUTurn] = useState(false);
  const [winner, setWinner] = useState(null);

  const restartGame = () => {
    setBoard(['', '', '', '', '', '', '', '', '']);
    setCPUTurn(false);
    setWinner(null);
  };

  useEffect(() => {
    if (checkWinner(board)) {
      setWinner(checkWinner(board));
      return;
    }
    if (!winner && isCPUturn) {
      CPUTurn();
    }
  }, [isCPUturn]);

  const checkWinner = (board) => {
    console.log(board)
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < combinations.length; i++) {
      const [a, b, c] = combinations[i]; // every loop take a different combination to check
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    if (board.indexOf('') === -1) {
      return 'Even';
    }
    return null; 
  }

  const getCPUMove = () => {
    const boardCopy = [...board];
    const emptySquares = [];
    boardCopy.forEach((item, i) => {
      if (item === '') {
        emptySquares.push(i);
      }
    })
    const randomSelection = Math.floor(Math.random() * emptySquares.length);
    return emptySquares[randomSelection];
  };

  const CPUTurn = () => {
    const boardCopy = [...board];
    const CPUselection = getCPUMove(boardCopy);
    boardCopy[CPUselection] = shapes.CPU;
    setTimeout(() => {
      setBoard(boardCopy);
      setCPUTurn(false);
    }, 1000)
  }

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (!winner && !isCPUturn && boardCopy[i] === '') {
      boardCopy[i] = shapes.player;
      setBoard(boardCopy)
      setCPUTurn(true);
    }
  }

  const squares = board.map((item, i) => {
    return (
      <Square 
        key={i}
        value={item}
        index={i}
        handleClick={handleClick}
      />
    )
  })

  return (
    <div>
        {
          !winner
            ? <div className="Board">{squares}</div>
            : <EndGame 
              winner={winner}
              restartGame={restartGame} />
        }
    </div>
  )
};


export default Board;