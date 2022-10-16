import { Logger } from '@nestjs/common';
import {
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

//https://gabrieltanner.org/blog/nestjs-realtime-chat/

@WebSocketGateway(3003, {
  cors: {
    origin: '*',
    credentials: true,
  },
  namespace: 'game',
})
export class GameGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger: Logger = new Logger('GameGateway BRRRR');

  @WebSocketServer()
  server: Server;

  afterInit(server: any) {
    this.logger.log('Init');
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: any) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  // ball mouvement
  handleMovement(client: any) {
    // user data
    const user = {
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    };

    // opponent data
    const opponent = {
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    };

    // ball data
    const ball = {
      x: 0,
      y: 0,
      r: 0,
      d: {
        x: 0,
        y: 0,
      },
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    };
  }

  // start a room
  @SubscribeMessage('startGame')
  startGame(socket: Socket, payload: any) {
    socket.join('aRoom');
    console.log('socket--->', socket);
  }

  //   @SubscribeMessage('msgToServer')
  //   handle(client: Socket, payload: string) {
  //     console.log('You am the palof', payload);
  //   }
}
