import { Logger } from '@nestjs/common';
import { OnGatewayInit, SubscribeMessage, WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import {Socket, Server} from 'socket.io';


//https://gabrieltanner.org/blog/nestjs-realtime-chat/

@WebSocketGateway(3003, {cors: {
	origin: '*',
	credentials: true
	},	namespace : 'dm'
})
export class ChatGateway implements  OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect { 
 
	private logger: Logger = new Logger('ChatGateway BRRRR');

	@WebSocketServer() 
	server : Server;

	afterInit(server: any) {
		this.logger.log('Init');
	}

	handleConnection(client : Socket, ...args: any[]) {
		this.logger.log(`Client connected: ${client.id}`);
	}

	handleDisconnect(client: any) {
		this.logger.log(`Client disconnected: ${client.id}`);
	}
  
	@SubscribeMessage('msgToServer') // Equivalent to socket.on('msgToServer') listening to any 'msgToServer' event
	handleMessage(client: Socket, payload) {
		console.log("You am the palof", payload)

		
		//const token = client.handshake.query.token.toString();
		//const payload = verifyAccessToken(token);
		const roomId = payload.roomId;
		
		//const user = payload && (await this.prismaService.findOne(payload.id));
		//const room = user?.room;
		client.join(roomId);
		this.server.to(roomId).emit(payload.message);
		//console.log(`Message from ${client.id}: ${payloadJson.name} or ${payload}`);
		//client.emit('msgToClient', payload);
	}
}

//!https://wanago.io/2021/01/25/api-nestjs-chat-websockets/
//? https://javascript.info/websocket
//? https://docs.nestjs.com/fundamentals/lifecycle-events
//? https://docs.nestjs.com/websockets/gateways
// ?https://socket.io/docs/v3/emit-cheatsheet/
//* @WebsocketGateway() declarator which gives us access to the socket.io functionality.
//* OnGatewayInit, OnGatewayConnection and OnGatewayDisconnect which we use to log some key states of our application. For example, we log when a new client connects to the server or when a current client disconnects.
//* @WebsocketServer() which gives us access to the websockets server instance.
//* @SubscribeMessage('msgToServer') makes it listen to an event named msgToServer.

//@SubscribeMessage('connection') = listen to an event named connection
 //socket.on = receive
 //socket.emit = send
 //socket.to(room).emit = send to everyone in a room including the sender
