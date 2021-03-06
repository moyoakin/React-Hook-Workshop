import React from 'react';
import { WorkShopNote } from '../../reusables/workshop-note'
import useLocalStorageState from '../../utils/localstorage'
import file from './01.md'


function Board() {
  const [squares, setSquares] = useLocalStorageState('board',Array(9).fill(null));

  const nextValue = calculateNextValue(squares)
  const winner = calculateWinner(squares)
  const status = calculateStatus(squares,winner,nextValue)

  //const squares = Array(9).fill(null);

  function calculateNextValue(squares){

  const Xplay = squares.filter((xPlay) => xPlay === 'X' ).length;
  const Oplay = squares.filter((oPlay) => oPlay === '0').length;
  return Oplay === Xplay ? 'X' : '0';

  }

  function calculateWinner(squares){

    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
  ]

  for(let i = 0; i < lines.length; i++){
    const [a,b,c] = lines[i];

    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
  }

  function calculateStatus(squares,winner,nextValue){

    return winner
    ? `Winner: ${winner}`
    :squares.every(Boolean)
    ?`Scratch: Cat's game`
    :`Next player: ${nextValue}`


  }
  

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    )
  }

  function selectSquare(square) {
    if(winner || squares[square] === true){
      return;
    }
    const squareCopy = [...squares]
    squareCopy[square] = nextValue
    setSquares(squareCopy)
  }

  function restart() {
    setSquares(Array(9).fill(null));

  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>

      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>

      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>

      <button className="restart" onClick={restart}>restart</button>
    </div>
  )
}

function Game() {
    
  return(
      <div className="game">
        <div className="game-board">
            <Board />
        </div>
      </div>

  ) 


}

function App() {
  return (
    <div className="grid-container">
      <WorkShopNote file={file} />
      <Game />
    </div>
  )
}

export default App;



