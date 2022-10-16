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
import { Socket, Namespace } from 'socket.io';
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from 'unique-names-generator';

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
  private logger: Logger = new Logger('GameGateway');

  //   starter variable / socket
  @WebSocketServer()
  io: Namespace;
  room_name: string;
  rooms: any;
  PLAYER_HEIGHT = 80;
  PLAYER_WIDTH = 10;
  BALL_RADIUS = 7;
  FRAME_PER_SEC = 50;

  //=========================================== UTILS
  // create new room
  newRoom() {
    this.room_name = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
    });
    this.rooms[this.room_name] = {
      players_size: 0,
      ball: {
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
      },
      players: [],
    };
  }
  //   check if the room is full
  islastRoomFull() {
    return (
      this.rooms[this.room_name] && this.rooms[this.room_name].players_size == 2
    );
  }
  //   add a player to the room
  addPlayer(id: string, login: string, username: string, avatar: string) {
    if (this.rooms[this.room_name]) {
      this.rooms[this.room_name].players.push({
        login: login,
        username: username,
        avatar: avatar,
        room_name: this.room_name,
        socket_id: id,
        score: 0,
        movement: {
          x: 0,
          y: 0,
          w: 0,
          h: 0,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      });
      this.rooms[this.room_name].players_size++;
    }
  }
  //   get the room name by the id
  getRoomById(id: string) {
    var ret_room: string;
    for (const room in this.rooms) {
      this.rooms[room].players.forEach((player) => {
        if (player.socket_id === id) {
          ret_room = room;
        }
      });
    }
    return ret_room;
  }
  //   romove a room
  removeRoomById(id: string) {
    var room = this.getRoomById(id);
    if (this.rooms[room]) {
      if (this.rooms[room].players[0].socket_id !== id)
        this.io
          .to(this.rooms[room].players[0].socket_id)
          .emit('opponentDisconnect');
      else
        this.io
          .to(this.rooms[room].players[1].socket_id)
          .emit('opponentDisconnect');
      delete this.rooms[room];
    }
  }

  //   init the players coordianete
  initPlayers(room: string, canvas: any) {
    if (this.rooms[room]) {
      // uset data
      this.rooms[room].players[0].movement.x = this.PLAYER_WIDTH / 2;
      this.rooms[room].players[0].movement.y =
        (canvas.h - this.PLAYER_HEIGHT) / 2;
      this.rooms[room].players[0].movement.w = this.PLAYER_WIDTH;
      this.rooms[room].players[0].movement.h = this.PLAYER_HEIGHT;
      this.rooms[room].players[0].movement.top = 0;
      this.rooms[room].players[0].movement.bottom = 0;
      this.rooms[room].players[0].movement.left = 0;
      this.rooms[room].players[0].movement.right = 0;

      // opponent data
      this.rooms[room].players[1].movement.x =
        canvas.w - this.PLAYER_WIDTH * (3 / 2);
      this.rooms[room].players[1].movement.y =
        (canvas.h - this.PLAYER_HEIGHT) / 2;
      this.rooms[room].players[1].movement.w = this.PLAYER_WIDTH;
      this.rooms[room].players[1].movement.h = this.PLAYER_HEIGHT;
      this.rooms[room].players[1].movement.top = 0;
      this.rooms[room].players[1].movement.bottom = 0;
      this.rooms[room].players[1].movement.left = 0;
      this.rooms[room].players[1].movement.right = 0;
    }
  }
  //   init the ball coordianete
  initBall(room: string, canvas: any, speedMode: number) {
    const START_DIRECTION = Math.random() - 1;
    const PLAYER_STARTER = Math.random() > 0.5 ? 1 : -1;
    if (this.rooms[room]) {
      // ball data
      this.rooms[room].ball.x = canvas.w / 2;
      this.rooms[room].ball.y = canvas.h / 2;
      this.rooms[room].ball.r = this.BALL_RADIUS;
      this.rooms[room].ball.d.x =
        PLAYER_STARTER * speedMode * Math.cos(START_DIRECTION * (Math.PI / 4));
      this.rooms[room].ball.d.y =
        PLAYER_STARTER * speedMode * Math.sin(START_DIRECTION * (Math.PI / 4));
      this.rooms[room].ball.top = 0;
      this.rooms[room].ball.bottom = 0;
      this.rooms[room].ball.left = 0;
      this.rooms[room].ball.right = 0;
    }
  }
  collision(room: string, player: number) {
    if (this.rooms[room]) {
      this.rooms[room].ball.top =
        this.rooms[room].ball.y - this.rooms[room].ball.r;
      this.rooms[room].ball.bottom =
        this.rooms[room].ball.y + this.rooms[room].ball.r;
      this.rooms[room].ball.left =
        this.rooms[room].ball.x - this.rooms[room].ball.r;
      this.rooms[room].ball.right =
        this.rooms[room].ball.x + this.rooms[room].ball.r;

      this.rooms[room].players[player].top = this.rooms[room].players[player].y;
      this.rooms[room].players[player].bottom =
        this.rooms[room].players[player].y + this.rooms[room].players[player].h;
      this.rooms[room].players[player].left =
        this.rooms[room].players[player].x;
      this.rooms[room].players[player].right =
        this.rooms[room].players[player].x + this.rooms[room].players[player].w;

      return (
        this.rooms[room].ball.bottom > this.rooms[room].players[player].top &&
        this.rooms[room].ball.right > this.rooms[room].players[player].left &&
        this.rooms[room].ball.left < this.rooms[room].players[player].right &&
        this.rooms[room].ball.top < this.rooms[room].players[player].bottom
      );
    }
    return false;
  }

  //   update the game
  update(room: string, canvas: any, speedMode: number) {
    if (this.rooms[room]) {
      this.rooms[room].ball.x += this.rooms[room].ball.d.x;
      this.rooms[room].ball.y += this.rooms[room].ball.d.y;
      // bouce on bottom and top
      if (
        this.rooms[room].ball.y + this.rooms[room].ball.r > canvas.h ||
        this.rooms[room].ball.y - this.rooms[room].ball.r < 0
      ) {
        this.rooms[room].ball.d.y *= -1;
      }
      // bouce on right and left
      if (this.rooms[room].ball.x + this.rooms[room].ball.r > canvas.w) {
        this.rooms[room].players[0].score++;
        this.initBall(room, canvas, speedMode);
      } else if (this.rooms[room].ball.x - this.rooms[room].ball.r < 0) {
        this.rooms[room].players[1].score++;
        this.initBall(room, canvas, speedMode);
      }
      // bouce the player
      const player = this.rooms[room].ball.x < canvas.w / 2 ? 0 : 1;
      if (this.collision(room, player)) {
        const angle =
          ((this.rooms[room].ball.y -
            (this.rooms[room].players[player].y +
              this.rooms[room].players[player].h / 2)) /
            (this.rooms[room].players[player].h / 2)) *
          (Math.PI / 4);
        const direction = this.rooms[room].ball.x < canvas.w / 2 ? 1 : -1;
        this.rooms[room].ball.d.x = direction * speedMode * Math.cos(angle);
        this.rooms[room].ball.d.y = direction * speedMode * Math.sin(angle);
      }
    }
  }
  //   game loop
  gameLoop(room: string, canvas: any, speedMode: number) {
    if (this.rooms[room]) {
      this.update(room, canvas, speedMode);
      this.io
        .to(this.rooms[room].players[0].socket_id)
        .to(this.rooms[room].players[1].socket_id)
        .emit('onGameClient', this.rooms[room]);
    }
  }

  //   start the game for a room
  start(id: string, canvas: any, speedMode: number) {
    if (this.islastRoomFull()) {
      var room = this.getRoomById(id);
      if (this.rooms[room]) {
        this.initPlayers(room, canvas);
        this.initBall(room, canvas, speedMode);
        setInterval(() => {
          this.gameLoop(room, canvas, speedMode);
        }, 1000 / this.FRAME_PER_SEC);
      }
    }
  }

  //=========================================== EVENTS
  //   init
  afterInit() {
    this.rooms = {};
    this.newRoom();
  }
  //   connection
  handleConnection(client: Socket) {}
  //   disconnection
  handleDisconnect(client: Socket) {
    this.removeRoomById(client.id);
  }

  //=========================================== EVENTS
  // start a room
  @SubscribeMessage('data')
  data(client: Socket, payload: any) {
    if (!this.islastRoomFull()) {
      this.addPlayer(
        client.id,
        payload.login,
        payload.username,
        payload.avatar,
      );
    } else {
      this.newRoom();
      this.addPlayer(
        client.id,
        payload.login,
        payload.username,
        payload.avatar,
      );
    }

    this.start(client.id, payload.canvas, payload.speedMode);
  }

  // on game
  //   @SubscribeMessage('onGameServer')
  //   onGame(client: Socket, payload: any) {
  //     // console.log(payload);

  //     var room = this.getRoomById(client.id);
  //     this.update(room, payload.canvas, payload.speedMode);
  //     this.io
  //       .to(this.rooms[room].players[0].socket_id)
  //       .to(this.rooms[room].players[1].socket_id)
  //       .emit('onGameClient', this.rooms[room]);
  //   }
}
