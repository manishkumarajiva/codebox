const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const port = 8000;
const app = express();

const server = http.createServer(app);
const io = socketIO(server);

app.set('views', path.join(__dirname, '/public'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index')
})

io.on('connection',(socket) => {
    socket.username = 'Anonymous';
    console.log('New User Connected', socket.username);

    // username change
    socket.on('change_username', (username) => {
        socket.username = username
    })

    // new message
    socket.on('message', (message) => {
        io.sockets.emit('new_message', { message : message, user : socket.username })
    })

    // typing event
    socket.on('typing', (message) => {
        socket.broadcast.emit('typing', socket.username)
    })

    // stop typing
    socket.on('stop_typing', () => {
        socket.broadcast.emit('stop_typing')
    })

    socket.on('disconnect', (user) => {
        console.log(user + " is disconnected")
    })
})


server.listen(port, function(){ console.log(`Server listening on port ${port}`)})