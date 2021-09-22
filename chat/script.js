const socket = io('http://localhost:8000')
const form = document.getElementById('send-div');
const inputmsg = document.getElementsByClassName('text')[0];
const contain = document.getElementsByClassName('container')[0];
const append = (message,position)=>{
    const newmsg = document.createElement('div');
    newmsg.innerText = message;
    newmsg.classList.add('mssg');
    newmsg.classList.add(position);
    contain.append(newmsg);
}
const myname = prompt('Enter Your Name');
socket.emit('newuser',myname);
socket.on('userjoin',myname=>{
    append(`${myname} joined the chat`,'right')
})

socket.on('receive',data=>{
    append(`${data.myname}: ${data.message}`,'left')
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message = inputmsg.value;
    append(`You: ${message}`,'right');
    socket.emit('send',message);
    inputmsg.value = ''
})