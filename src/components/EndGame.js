const EndGame = ({ winner, restartGame }) => {
  return (
    <div className="EndGame">
      {winner === 'Even'
        ? <h2>{`No one win!`}</h2>
        : <h2>{`The winner is ${winner}`}</h2>}
      <hr />
      <h3>Another round?</h3>
      <button className="button X" onClick={restartGame}>Yes!</button>
      <button className="button O" onClick={() => {}}>Please, no...</button>
    </div>
  )
}

export default EndGame;