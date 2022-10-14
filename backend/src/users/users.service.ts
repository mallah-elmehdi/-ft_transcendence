import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { userDataDto, RoomInfoDto} from './DTO/username.dto'

@Injectable()
export class UsersService {

		constructor(private readonly prisma : PrismaService) {}


		// inserting to a table with Foreing keys
	async  friendReq(user :Number, params:Number) {
		
		// check here if the user has already friended the person
		const update = await this.prisma.friend.create({ data: 
			{ friendId: Number(params) , user: { connect: { user_id: Number(user) } 
		} } })
		return update
		// const updated_list =  await this.prisma.user.create(
		// 	{
		// 		where : {
		// 			user_id : user,
		// 			friends :
		// 			{
		// 				create :
		// 				{
		// 					friendsId: params,
		// 				},
		// 			},
		// 		},
		// 	});
	}
	async AddToRoom(user, rool, roomId)
	{
		const update = await this.prisma.members.create({
			 data: 
			{ prev: (rool) , 
				room: { connect: { room_id: Number(roomId) } },
				user: { connect: { user_id: Number(user) } }
		 }
		 })
		 console.log("Waaaaa3 ",update)
		 return update;
		}
	async CreateRooom(RoomInfoDto: RoomInfoDto)
	{
		console.log('aru heri')
		const room_init = await this.prisma.room_info.create(
			{
				data: {
					room_name: RoomInfoDto.room_name,
					room_type: RoomInfoDto.room_type,
					password: RoomInfoDto.room_password,
					room_avatar: RoomInfoDto.room_avatar,
				}
			}
		)
		console.log('roooom >>> ', room_init);
	
		return room_init;
	}

	async getRooms (id: Number)
	{
		const rooms = await this.prisma.members.findMany(
		{
			where :
			{
				userId : Number(id),
			},
		})
		console.log('rooms = >', rooms);
		
		return rooms
	}
	async getRoombyId (id: Number)
	{
		const room = await this.prisma.room_info.findUnique(
		{
			where :
			{
				room_id : Number(id),
			},
		})
		console.log('uniq rooms = >', room);
		
		return room
	}
	async getMembersbyId (id: Number)
	{
		const members = await this.prisma.members.findMany(
		{
			where :
			{
				roomId : Number(id),
			},
		})

		return members
	}

	async  getAllUsers() {
		const users = await this.prisma.user.findMany();
		return users;

	}
	async getAllFriends(login: number)
	{
		const frineds = await this.prisma.friend.findMany ( {
			where :
			{
				userId : login,
			},
		})
		console.log("Friends", frineds)
		return frineds
	}

	async getUser(login : number)
	{
			console.log('login', login);
			 try {
			const found = await this.prisma.user.findUnique({
				where: {
					user_id: Number(login),
				},
			}); 
			console.log('found here: ', found);   
			if (!found) {
				return null;
			}
			return found;
	}
	catch (err: any) {
			console.log('error in getUser', err);
			return null;
		}
	}
	async getUserbyLogin(login : string)
	{
			console.log('login', login);
			 try {
			const found = await this.prisma.user.findUnique({
				where: {
					user_login:login,
				},
			}); 
			console.log('found here: ', found);   
			if (!found) {
				return null;
			}
			return found;
	}
	catch (err: any) {
			console.log('error in getUser', err);
			return null;
		}
	}

	async setUsername(login : string, username : string)
	{
		return await this.prisma.user.update({
			where: {
				user_login: login,
			},
			data: {
				user_name: username,
			},
		});
	}
	async updateUserData(login : string, userDataDto : userDataDto)
	{
		return await this.prisma.user.update({
			where: {
				user_login: login,
			},
			data: {
				user_avatar: userDataDto.user_avatar,
				user_name: userDataDto.user_name,
				facebook: userDataDto.facebook,
				discord: userDataDto.discord,
				instagram: userDataDto.instagram,
			},
		});
	}



	async setUserState(login : any, state : boolean)
	{
		console.log(`${login} userState: ${state}`);
		try 
		{
			const userOnline =  await this.prisma.user.update({
			where: {
				user_login: login
			},
			data: {
				online: state
			}
			})
		}
		catch (err : any) 
		{
			console.log('error in setUserState ', err);
		}
	}
}
