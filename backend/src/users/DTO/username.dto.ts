 import {IsString, Max, Min, Length, isString, IsNumber} from 'class-validator'
import { Multer } from 'multer';

 export class usernameDto {

	@Length(3, 20)
 	@IsString()
 	username: string;
 }
 export class userDataDto {
	@IsString()
	user_avatar? : string;
	@IsString()
	user_name?: string;
	@IsString()
	facebook?: string;
	@IsString()
	discord?: string;
	@IsString()
	instagram?: string;
}

export class RoomInfoDto{
	
	@IsString()
	room_name : string;
	@IsString()
	room_type : string;
	@IsString()
	room_password? : string;
	@IsString()
	room_avatar? : string;
 }

export class AddedUsersDto {
	
	@IsNumber()
	room_id : number;
	
	@IsString()
	room_password? : string;
}
export class MemberStatus {
	
	@IsNumber()
	room_id : number;
	
	@IsString()
	room_status : string;
}