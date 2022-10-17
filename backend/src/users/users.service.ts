import { HttpCode, Injectable } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { Http2ServerRequest } from 'http2';
import { PrismaService } from 'src/prisma/prisma.service';
import { userDataDto, RoomInfoDto} from './DTO/username.dto'
const bcrypt = require('bcrypt');

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

	async BlockUserFromGroupById(group_id, user_id)
	{
		const blocked = await this.prisma.members.deleteMany (
			{
				where :
				{
					roomId: Number(group_id),
					userId: Number(user_id)
				}
			}
		)
		if (blocked.count == 0)
			throw "NOT FOUND"
		console.log("Heeeeeee from group ", blocked)
		return blocked
	}
	async BlockUserById(me: number, DeletedUser )
	{

		// const user_data = await this.prisma.friend.findMany(
		// 	{
		// 		where: {
		// 			userId : Number(me),
		// 			friendId: Number(DeletedUser)
		// 		}
		// 	}
		// )
		// console.log(user_data);
		// const status  = user_data.isBl
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
		// if (deleted.count == 0)
			// throw "NOT FOUND"
		// console.log(deleted)
		// return deleted;
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
		//  console.log("Waaaaa3 ",update)
		 return update;
		}
	async ChangeMemberStatus(user, rool, roomId)
	{
		const update = await this.prisma.members.updateMany({
			where :
			{
				roomId: Number(roomId),
				userId: Number(user)
			} ,
			data: 
			{ prev: (rool) 
		 }
		 })
		console.log("Waaaaa3 ",update)
		 return update;
		}
	async ChangeGroupStatus(id , status)
	{
		// const update = await this.prisma.room_info.updateMany(
		// 	{
		// 		where :
		// 		{

		// 			room_id : Number(id),
				
		// 		},
		// 		data :{
		// 			room_name : status.room_name,
		// 			room_type : status.room_g,

		// 		}
		// 	}
		// )
	}

	async CreateRooom(RoomInfoDto: RoomInfoDto)
	{
		const saltRounds = 10;
		var hashed_password  = null
		console.log("room password ",RoomInfoDto.room_password);
		
		if (RoomInfoDto.room_password)
		{
			hashed_password = bcrypt.hashSync(RoomInfoDto.room_password, saltRounds);
		}
		console.log("Hashed paassiwordi =>",hashed_password);
		
		// console.log(status)
		const room_init = await this.prisma.room_info.create(
			{
				data: {
					room_name: RoomInfoDto.room_name,
					room_type: RoomInfoDto.room_type,
					password: hashed_password,
					room_avatar: RoomInfoDto.room_avatar,
				}
			}
			)	
			return room_init;
		}
		check_password(room_password, hash) : boolean
		{
			return  bcrypt.compareSync(room_password, hash);	
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
				if (!room)
					throw "NOT FOUND"
				return room		
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
		// console.log(user)
		const members = await this.prisma.members.findMany(
			{
				where :
				{
					roomId : Number(id),
				},
			})
			
		// console.log(members)
		return members
	}
	async getMembersbyIdRoom (id: Number, user:Number)
	{
		const members = await this.prisma.members.findMany(
		{
			where :
			{
				userId: Number(user),
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
					// friendId : login
			},
		})
		const other_frineds = await this.prisma.friend.findMany ( {
			where :
			{
				friendId : login,
					// friendId : login
			},
		})
		console.log("other");
		
		const res = [
			...frineds,
			...other_frineds,
		]
		console.log("frinds   //", res);
		
		if (!frineds)
			throw 'NOT FOUND'
		return res
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
	async updateUserData(login : Number, userDataDto : userDataDto)
	{
		return await this.prisma.user.update({
			where: {
				user_id: Number(login),
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
				user_id: Number(login)
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
