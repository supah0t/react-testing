import React, { useState } from 'react';

//import { socket, test } from './connectToWs';

export const WsTesting = () => {
    const [connected, setConnected] = useState(false);
    //socket.on('chat message', msg => {
    //setConnected(true);
    //console.log('message from server: ' + msg);
    //});

    return (
        <div>
            {connected ? (
                <div>
                    <span>Testing connection bro, click the button</span>
                    <br />
                    <br />
                    <button onClick={test}>Click me for data</button>
                </div>
            ) : (
                <span>
                    Ws socket not connected, check wsTesting.jsx to use it
                </span>
            )}
        </div>
    );
};
