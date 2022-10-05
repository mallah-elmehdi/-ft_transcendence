import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
//import { Account } from './entity/account.entity';
import { PrismaService } from 'src/prisma/prisma.service';
const speakeasy = require('speakeasy');

@Injectable()
export class AuthService {
	constructor(private jwtService: JwtService, private prisma: PrismaService) {} //Inject

	FortyTwoLogin(req) {
		if (!req.user) {
			return 'No user from  FortyTwo';
		}

		return {
			message: 'User information from  FortyTwo',
			user: req.user,
		};
	}

	async createAccount(id: string, avatar: string) {
		try {
			const found = await this.prisma.user.findUnique({
				where: {
					user_login: id,
				},
			});


			if (!found) {
				const User = await this.prisma.user.create({
					data: {
						user_login: id,
						user_name: id,
						user_avatar: avatar,
					},
				});
				
				console.log('User Created ', id);
		return;
			}
			console.log('User Exists ', id);
		} catch (err: any) {
			console.log('error ', err);
		}
	}

	// usless after passsport-42

	// async getToken(userCode: string) {
	//   console.log('client id ', process.env.CLIENT_ID);
	//   const token: any = await axios
	//     .post('https://api.intra.42.fr/oauth/token', {
	//       grant_type: 'authorization_code',
	//       client_id: process.env.CLIENT_ID,
	//       client_secret: process.env.CLIENT_SECRET,
	//       code: userCode,
	//       redirect_uri: 'http://10.11.5.7:3000/auth',
	//     })
	//     .then((token) => token.data.access_token)
	//     .catch((err) => console.log('Error POST request Token', err.data));
	//   return token;
	// }

	// async getUser(token: string) {
	//   const user = await axios
	//     .get('https://api.intra.42.fr/v2/me', {
	//       headers: {
	//         Authorization: 'Bearer ' + token,
	//       },
	//     })
	//     .then((res) => res.data)
	//     .catch((err) =>
	//       console.log('Error getting user using Bearer Token', err),
	//     );

	//   return user;
	// }
	
async generate2fa(id:string) 
{
	const getUser  = await this.prisma.user.findUnique({
		where: {
		  user_login: id,
		},
	  })
	var {two_authentication } = getUser;
	
	if (two_authentication === null)
	{
		var secret = speakeasy.generateSecret({
			 name: 'ponGame',
			 length: 10
			});
		const update = await this.prisma.user.update({
			where: {
			  user_login: id,
			},
			data: {
				two_authentication: secret.otpauth_url,
			},
		  })
		  two_authentication = secret.otpauth_url;
		  console.log('update :', update);
	}
		return (two_authentication);
}


async verify2fa(userToken : string, base32secret : string)
{
	var verified = speakeasy.totp.verify({ secret: base32secret,
		encoding: 'base32',
		token: userToken });
		console.log(verified);
		return verified;
	}


	async findUserId(login: string) {
		return await this.prisma.user.findUnique({ where: { user_login: login } });
	}

	signToken(userLogin: string) {
		const payload = {
			userLogin: userLogin,
		};

		const accessToken = this.jwtService.sign(payload, {
			secret: process.env.JWT_SECRET,
			expiresIn: '1w',
		});

		//  const refreshToken = this.jwtService.signAsync(payload, {
		//    secret: process.env.JWT_SECRET,
		//    expiresIn: '1w',
		//  });
		return {
			access_token: accessToken,
		};
	}

	async logout(userLogin: string) {
		//await this.prisma.user.update({
		//	where : {
		//		user_login: userLogin
		//	}
		//})
	}
}
