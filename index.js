const http = require('http');
const express = require('express');
const path = require('path');
const {Server}= require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
//Socket.io setup
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, 'public', 'index.html'));
})


server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});