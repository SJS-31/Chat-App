const socket = io('http://localhost:8000');


const name= prompt("Enter mmmm");
console.log(name);

const form = doucument.getElementById('send-container');
const messageInput = doucument.getElementById('messageInp')
const messageContainer = doucument.querySelector(".container")

socket.emit('new-user-joined') 