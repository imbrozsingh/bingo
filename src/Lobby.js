import './components/css/Lobby.css';
import { useNavigate } from 'react-router-dom';

const Lobby = () => {

    const generateRandomString = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    const navigate = useNavigate();

    const handleStartGame = () => {
      navigate('/game');
    };

    return (
        <div style={{ textAlign: 'center', position: 'relative', fontSize: '0.5vw', height: '75vh' }}>
            <h2 style={{ fontSize: '3.5vw', color: '#5b7b73' }}>Waiting for other players . . .</h2>
            <div className='LobbyBox'><p className='inLobbyHeading'>&#128071; Players Joined</p>
                <div className='topRow'>
                    <div className='PlayerBox' id='P1'>P1</div>
                    <div className='PlayerBox' id='P2'>P2</div>
                </div>
                <div className='bottomRow'>
                    <div className='PlayerBox' id='P3'>P3</div>
                    <div className='PlayerBox' id='P4'>P4</div>
                </div>
            </div>
            <p className='shareText' style={{fontSize: '1.5rem'}}>Share this code with friends to join the game</p>
            <div className='codeBox' style={{ textAlign: 'center', fontSize: 'xx-large', letterSpacing: '.3rem', backgroundColor: '#fff', color: '#4a3d41', width: '25%', margin: 'auto', marginTop: '1rem', borderRadius: '.5rem', marginBottom: '1rem', background: '#ffffff', boxShadow: 'inset 5px 5px 10px #dedede inset -5px -5px 10px #ffffff' }}>Code: {generateRandomString()}</div>
            <button onClick={handleStartGame}><span>Start</span>
      <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
  </svg>
  </button>
        </div>
    );
}

export default Lobby;