import './App.scss';
import GameMatrix from './components/GameMatrix';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className = "Header">
        
      </header>
    <GameMatrix />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path='/game' element={<GameMatrix />} />
    </Routes>
    </div>
  );
}

export default App;
