import { Logger } from '@nestjs/common';
import { OnGatewayInit, SubscribeMessage, WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import {Socket, Server} from 'socket.io';


//https://gabrieltanner.org/blog/nestjs-realtime-chat/
@WebSocketGateway()
export class ChatGateway implements  OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
 
  private logger: Logger = new Logger('ChatGateway BRRRR');

   @WebSocketServer() server: Server;
  afterInit(server: any) {
      this.logger.log('Init');
  }
  handleConnection(client: any, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
  handleDisconnect(client: any) {
      this.logger.log(`Client disconnected: ${client.id}`);
  }



  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, payload: string): string {
    //return {event: "msgToClient", data: payload};
    
    return ('Hello World');
  }
}


//@WebsocketGateway() declarator which gives us access to the socket.io functionality.
//OnGatewayInit, OnGatewayConnection and OnGatewayDisconnect which we use to log some key states of our application. For example, we log when a new client connects to the server or when a current client disconnects.
//@WebsocketServer() which gives us access to the websockets server instance.