const Square = ({ handleClick, value, index }) => {
  return (
    <button className="Square"
      onClick={() => handleClick(index)}>
        {value}
    </button>
  )
}

export default Square;