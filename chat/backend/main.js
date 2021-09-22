const io = require('socket.io')(8000, {
    cors:{
        origin:'*',
    }
});
const users = {};
io.on('connection',socket=>{
    socket.on('newuser', myname=>{
        users[socket.id] =myname;
        socket.broadcast.emit('userjoin',myname);
    })

    socket.on('send', message =>{
        socket.broadcast.emit('receive', {message: message, myname: users[socket.id]})
    })
})
