import './Lobby.css';

const Lobby = () => {
    return (
        <div>
            <h1>Waiting for other players</h1>
            <div className='LobbyBox'>Lobby box
                <div className='PlayerBox' id='P1'>P1 box</div>
                <div className='PlayerBox' id='P2'>P2 box</div>
                <div className='PlayerBox' id='P3'>P3 box</div>
                <div className='PlayerBox' id='P4'>P4 box</div>
            </div>
            <div>Generate random text</div>
        </div>
    );
}

export default Lobby;