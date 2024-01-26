import './components/Table.css'
import Lobby from './Lobby'
import { Routes, Route, useNavigate } from 'react-router-dom'

const Homepage = () => {

    const navigate = useNavigate();

    const handleNewGame = () => {
      navigate('/lobby');
    };

    return (
        <div style={{ textAlign: 'center', position: 'relative', fontSize: '0.5vw' }}>
            <h2 style={{ fontSize: '3.5vw', letterSpacing: '0.5vw', textShadow: '0 0 10px #F2EBC0 inset', WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: '#F2EBC0' }}>How to Play?</h2>
                <p style={{ fontSize: '1.2rem', marginTop: 'auto', marginBottom: 'auto', marginLeft: '20vw', marginRight: '20vw' }}>
                    <ol style={{ textAlign: 'left', lineHeight: '2', color: '#F06060', letterSpacing: '0.1vw' }}>
                        <li>Click on "New Game" to start the game.</li>
                        <li>There is a 5x5 matrix which you can fill with numbers from 1-25</li>
                        <li>Start setting number by clicking on empty cell(You can also randomly fill numbers by clicking on Auto-Fill button)</li>
                        <li>Arrange numbers from 1-25 in any pattern you like or know is good.</li>
                        <li>When you have set the numbers till 25, the matrix is locked and set</li>
                        <li>Now click on a number to mark it crossed and the same number will be marked crossed in matrix of other players.</li>
                        <li>Similarly, when player 2 crosses a number, all other player's numbers will be marked crossed.</li>
                        <li>You have to cross numbers in such a way that in a row/column/diagonal all numbers are crossed.</li>
                        <li>When 5 such rows/columns/diagonals are crossed the game will end and the player with 5 such rows/columns/diagonals crossed first will win</li>
                    </ol>
                </p>
                <button onClick={handleNewGame}><span>New Game</span>
      <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
  </svg>
  </button>
        </div>
    );
}

export default Homepage;