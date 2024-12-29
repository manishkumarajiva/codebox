const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const socketIO = require('socket.io');
const { createServer } = require('http');


const app = express();
const httpServer = createServer(app);
const io = socketIO(httpServer);

var clients = 0;

io.on('connection', (socket) => {
  clients++;

  setTimeout(() => { // send message to client after 4 seconds
    socket.send('message', 'Hello from server');
  }, 4000);

  socket.emit('hello', 'Hello from server'); // simple event emitter

  io.emit('broadcast1', { description : clients + ' clients connected!'}); // broadcast event to all clients
  io.sockets.emit('broadcast2', { description : clients + ' clients connected!'}); // broadcast event to all clients execluding the sender
  // also use for broadcast
  socket.broadcast.emit('broadcast3', { description : clients + ' clients connected!'}); // broadcast event to all clients execluding the sender

  socket.on('disconnect', () => {
    clients--;
    io.sockets.emit('broadcast', { description : clients + ' clients disconnected!'});
  });
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

httpServer.listen(3000, () => {
  console.log('listening on *:3000');
});