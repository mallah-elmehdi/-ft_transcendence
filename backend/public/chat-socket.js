const socket = io("http://localhost:3005")

const message = document.getElementById("message");
const messages = document.getElementById("messages");

 
const newMessage = () => 
{
	socket.emit('message', {data: message.value});
}


socket.on('msgToServer',({data}) => {
	handleNewMessage(data);
})


const buildNewMessage = (msg) =>
{
	const li = document.createElement('li');
	li.appendChild(document.createTextNode(msg));
	return li;
}

const handleNewMessage = (msg) =>
{
	messages.appendChild(buildNewMessage(msg));
}