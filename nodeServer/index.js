//Node Server to handle socket io connections

const io= require('socket.io')(8000)

const users={}

io.on('connection', socket=>{ //Instance of socect.io, Will listen all the connections established
    socket.on('new-user-joined', name=>{ // Events fired for particular connection 
        console.log("New user", name)
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message =>{
        socket.broadcast.emit('receive' ,{message: message, name: users[socket.id]})
    });
})

