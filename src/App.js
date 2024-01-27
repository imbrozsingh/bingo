import './components/css/App.scss';
import GameMatrix from './components/GameMatrix';
import Homepage from './Homepage';
import Lobby from './Lobby';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className = "Header">
        
      </header>
    
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path='/game' element={<GameMatrix />} />
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
