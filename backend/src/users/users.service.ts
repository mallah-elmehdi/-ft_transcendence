import { HttpCode, Injectable } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { Http2ServerRequest } from 'http2';
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
	}
	async BlockUserById(me: number, DeletedUser )
	{
		// const id = await this.prisma.user.findMany(
		// 	{
		// 		where:
		// 		{
		// 			user_id : Number(DeletedUser),
		// 			friends:
		// 			{
		// 			connect: {

		// 				: Number(me),
		// 			}	

		// 			}
		// 		}
				
		// 	}
		// )
		const deleted = await this.prisma.friend.deleteMany(
			{
				where :
				{
					userId : Number(me),
					friendId: Number(DeletedUser)
					
				}
			}
		)
		// const deleted = await this.prisma.user.update(
		// 	{	
		// 		where:
		// 		{
		// 			user_id: me,
		// 		},
		// 			data : {
		// 				friends :
		// 				{
		// 					disconnect : [ { id: Number(DeletedUser) } ],
		// 				},
		// 			},
		// 			select:
		// 			{
		// 				friends: true,
		// 			}
		// 	}
		// )
		console.log(deleted)
		return deleted;
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

		// try {
			
			const room = await this.prisma.room_info.findUnique(
				{
					where :
					{
						room_id : Number(id),
					},
				})
				if (!room)
					throw HttpErrorByCode
				console.log('uniq rooms = here :>', room);
				return room
			// } catch (error) {
			// 	console.log("are u here", error);
			// }
		
	}
	async DeleteRoombyId (id: Number)
	{
		// before deletion check if the user has the right to delete
		// then after that delete the chat after that do the actions below
		const removed  = await this.prisma.members.deleteMany(
			{
				where :
				{
					roomId : Number(id)
				}
			}
		)
		const deleted = await this.prisma.room_info.delete(
		{
			where :
			{
				room_id : Number(id),
			}
		}
		)
		
		return deleted;
	
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

	async  getAllUsers(me) {
		const users = await this.prisma.user.findMany(
			{
				where:
				{
					NOT :
					{
						user_id: Number(me)
					}
				}
			}
		);
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
		const found = await this.prisma.user.findUnique({
			where: {
				user_id: Number(login),
			},
		});
		if (!found) {
			throw "NOT FOUND"
		}
		return found;
	}
	async getUserbyLogin(login : string)
	{
			
			const found = await this.prisma.user.findUnique({
				where: {
					user_login:login,
				},
			}); 
			console.log('found here: ', found);   
			if (!found) {
				throw "NOT FOUND";
			}
			return found;
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
