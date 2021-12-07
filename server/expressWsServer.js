const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
    cors: {
        origin: '*',
    },
});

io.on('connection', socket => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('Chat message', msg => {
        console.log('message: ' + msg);
    });

    socket.on('Chat message', msg => {
        io.emit('chat message', msg);
    });
});

server.listen(4000, () => {
    console.log('listening on *:4000');
});
