import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { fromEventPattern } from 'rxjs';
import {Socket, Server} from 'socket.io';
import { Logger } from '@nestjs/common';
import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { PrismaService } from 'src/prisma/prisma.service';

@WebSocketGateway({namespace:'userstate', cors: {
	origin: process.env.FRONTEND_URL,
}})
export class UsersGateway {
  

  constructor(private readonly PrismaService: PrismaService) {}


  @SubscribeMessage('connection')
  async handleMessage(client: Socket, payload: any) 
  {
    const userLogin =  JSON.parse(payload).userLogin;

   const userOnline =  await this.PrismaService.user.update({
      where: {
        user_login: userLogin
      },
      data: {
        online: true
      }
    })
    console.log('Client connected ' + client.id);

    client.on('disconnect', async () =>  //! Client: When a component gets destroyed emit to 'disconnect'
    { 
        console.log('Client disconnected ' + client.id);
        const userOffline =  await this.PrismaService.user.update({
      where: {
        user_login: userLogin
      },
      data: {
        online: false
      }
    })
    })
  }
}
