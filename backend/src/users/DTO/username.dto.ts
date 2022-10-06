 import {IsString, Max, Min, Length} from 'class-validator'

 export class usernameDto {

	@Length(3, 20)
 	@IsString()
 	username: string;
 }