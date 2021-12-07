import openSocket from 'socket.io-client';

// Connect to socket
export const socket = openSocket('http://localhost:4000');

const test = () => {
    socket.emit('Chat message', 'Hello my dude, nice message');
};

export { test };
