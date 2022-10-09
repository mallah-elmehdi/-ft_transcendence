import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { userDataDto} from './DTO/username.dto'

@Injectable()
export class UsersService {

		constructor(private readonly prisma : PrismaService) {}


	async getUser(login : string)
	{
			console.log('login', login);
			 try {
			const found = await this.prisma.user.findUnique({
				where: {
					user_login: login,
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
			data: userDataDto,
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
