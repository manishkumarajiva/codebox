$(function(){
    const socket = io.connect('http://localhost:8000');

    const username = $('#username');
    const set_button = $('#send_username');

    const message = $('#message');
    const send_message = $('#send_message');

    const chatroom = $('#chatroom');
    const status = $('#status');

    let stopTyping;

    // username change
    set_button.click(function(){
        socket.emit('change_username', username.val())
    })

    // new message
    send_message.click(function(){
        socket.emit('message', message.val())
    })

    // listen message and append in list
    socket.on('new_message', (response) => {
        message.val('');
        chatroom.append("<li>" + response.message + "&nbsp" + "<sub class='text-danger'>" + response.user + "</sub>"  + "</li>")
    })

    message.bind('keypress', () => {
        socket.emit('typing')

        clearTimeout(stopTyping);

        stopTyping = setTimeout(()=>{
            socket.emit('stop_typing')
        },1000)
    })


    socket.on('typing', (username) => {
        status.html("<span>" + username + " typing..." + "</span>")
    })

    socket.on('stop_typing', () => {
        status.html("")
    })
})