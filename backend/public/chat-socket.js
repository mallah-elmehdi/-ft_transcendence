
const message = document.getElementById("message");
const messages = document.getElementById("messages");

 
const newMessage = () => 
{
	console.log('msg value ', message.value)
	socket.emit('msgToServer', {data: message.value});
}


socket.on('msgToClient',({data}) => {
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