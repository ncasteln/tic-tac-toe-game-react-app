const StartButton = ({ startNewGame }) => {
  return (
    <button className="StartButton"
      onClick={() => startNewGame(true)}>
      Start a new game
    </button>
  )
}

export default StartButton;