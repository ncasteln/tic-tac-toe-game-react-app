import { useEffect, useState } from "react";
import App from "../App";

const EndGame = ({ winner, restartGame }) => {
  const [finish, setFinish] = useState(false);

  const handleClick = (e) => {
    if (e.target.name === 'restart') {
      restartGame();
    } else {
      setFinish(true);
    }
  }

  if (!finish) {
    return (
      <div className="EndGame">
        {
          winner === 'Even'
            ? <h2>No one win!</h2>
            : <h2>The winner is {winner}</h2>
        }
        <hr />
        <h3>Another round?</h3>
        <button name='restart' className="button X" onClick={handleClick}>Yes!</button>
        <button name='finish' className="button O" onClick={handleClick}>Please, no...</button>
      </div>
    )
  }
  return (
    <div className="EndGame">
      <h2>Ok, see you soon!</h2>
      <p>
        Since my creator didn't know routing yet, the only way to
        replay the game from here, is refreshing the page.
      </p>
    </div>
  )
}

export default EndGame;