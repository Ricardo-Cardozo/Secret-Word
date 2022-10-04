import './Game.css'

const Game = ({verifyLetter}) => {
  return (
    <div className='game'>
      <h1>Game</h1>
      <button onClick={verifyLetter}>Finalizar o Jogo</button>
    </div>
  )
}

export default Game