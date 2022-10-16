import { Controller, Get, Redirect, Query, Param, Req, UseGuards, Post, UseInterceptors, UploadedFile, MaxFileSizeValidator, FileTypeValidator, ParseFilePipe, HttpCode, HttpStatus, Body, Module, BadRequestException, HttpException, Patch} from '@nestjs/common';
import { UsersService } from './users.service';
import {Request} from 'express';
import { AuthGuard } from '@nestjs/passport';
import { Express } from 'express'
import { FileInterceptor, MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Observable, of } from 'rxjs';
import { usernameDto, userDataDto, RoomInfoDto, AddedUsersDto, MemberStatus} from './DTO/username.dto'
import { CloudinaryService } from './clodinary/clodinary.service';
import { get } from 'http';

// ! Before End, Check if the user is extracted from JWT, and remove static User (1)

//? blocking user by changing prev to "blocked"

@Controller('user')
// @UseGuards(AuthGuard('jwt'))
export class UsersController {
  
  constructor(private readonly UsersService: UsersService, private cloudinary: CloudinaryService) {
    
  }
  
  @Get('group/all')
  @HttpCode(200)
  async GetRooms(@Req() req: Request) {
    // here get the room for the current user
    
    return this.UsersService.getRooms(1).catch((err) => {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    });
  }
  
  @Patch('group/update/:id')
  @HttpCode(200)
  @UseInterceptors()
  async ChangeMemberStatus(@Body() status : MemberStatus, @Param('id') param : Number, @Req() req: Request) {
    
    // GET ID USER FROM JWT
       const member = await this.UsersService.getMembersbyIdRoom(status.room_id, 1)
      
       if (member[0].prev != "owner" )
          throw new HttpException('Password Invalid', HttpStatus.UNAUTHORIZED)

    return this.UsersService.ChangeMemberStatus(param, status.room_status,status.room_id).catch((err) => {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    });
  }

  @Post('group/add/:id')
  @HttpCode(201)
  @UseInterceptors()
  async AddUsersToRoomsbyId(@Body() user : AddedUsersDto, @Param('id') param : Number, @Req() req: Request) {
    
    
    if (user.room_password)
    {
       const room = await this.UsersService.getRoombyId(user.room_id)
      const status = this.UsersService.check_password(user.room_password,room.password)
      if (!status)
        throw new HttpException('Password Invalid', HttpStatus.UNAUTHORIZED)
    }
    return this.UsersService.AddToRoom(param,'member',user.room_id).catch((err) => {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    });
  }
  
  @Post('block/:id')
  @HttpCode(201)
  async BlockUserById(@Param('id') param : Number, @Req() req: Request) {

    return this.UsersService.BlockUserById(1, param).catch((err) => {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    });
  }
 
  @Get('group/:id')
  @HttpCode(200)
  async GetRoomsbyId(@Param('id') param : Number, @Req() req: Request) {
    // here get the room for the current user
    return this.UsersService.getRoombyId(param).catch((err) => {
      throw new HttpException(err, HttpStatus.NOT_FOUND);
    });
  }
  
  @Post('group/:id')
  @HttpCode(201)
  async DeleteRoomsbyId(@Param('id') param : Number, @Req() req: Request) {
    // check if the user is owner or an admin after deletion you may delete all
    // and delete all the corresponded data from 
    return this.UsersService.DeleteRoombyId(param).catch((err) => {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    });
  }
 
  @Get('members/:id')
  @HttpCode(200)
  async GetMembersbyId(@Param('id') param : Number, @Req() req: Request) {
    // here get the room for the current user
    return this.UsersService.getMembersbyId(param).catch((err) => {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    });
  }
  
  @Post('group')
  @HttpCode(201)
  @UseInterceptors(FileInterceptor('avatar'))
  async CreateRoom(@Body() RoomInfoDto : RoomInfoDto,  @UploadedFile() file, @Req() req: Request) {
    
    // here you after succesfully creating room add the creator as the the owner
    console.log("DTO", RoomInfoDto)
    if (file)
    {
      const cloud =  await this.cloudinary.uploadImage(file)
      if (cloud)
      {
        RoomInfoDto.room_avatar = cloud['url']
      }
    }
   const ba = await this.UsersService.CreateRooom(RoomInfoDto);
   if (ba)
    {
      const val = await this.UsersService.AddToRoom(1, 'owner', ba.room_id)
    } 
   return ba
  }

  @Post('add/:id')
  @HttpCode(201)
  async  AddFriend(@Param('id') param : Number) {
    const user_info = await this.UsersService.getUserbyLogin('aymaatou');
    // const user = user_info.user_id;
    const user = 1;
    return await this.UsersService.friendReq( user ,param);
  }
  
  @Get('list/all')
  @HttpCode(200)
  async GetAllUsers() {
    // add JWT ID user
      return await this.UsersService.getAllUsers(1);
  }

  @Get('friends')
  @HttpCode(200)
  async getAllFriends()  {
    /// add here JWT user
      return await this.UsersService.getAllFriends(1)
      .catch((err) => {
        throw new BadRequestException(err);
      });
 }

  @Get('me')
  @HttpCode(200)
  async getMe(@Req() req : Request)
  {
        return await this.UsersService.getUserbyLogin(req.user['userLogin']);
  }
 
  @Get("match")
  @HttpCode(200)
  async getMachHistory()
  {
    // console.log("HHHHHHHHHHH")
    // return await this.UsersService.GetMatchHistory("aymaatou");
    // console.log(value)
  }
  @Get(':id')
  async getUser(@Param('id') login:number)
  {
    return await this.UsersService.getUser(login)   .catch((err) => {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    });
  }
  
  @Post(':login/avatar')
  @HttpCode(201)
  @UseInterceptors(FileInterceptor('avatar'))
  async uploadImageToCloudinary(@UploadedFile() file) 
  {
    return await this.cloudinary.uploadImage(file).catch((err) => {
      throw new BadRequestException(err);
    }); 
}

  @Post('username/:login')
  @HttpCode(201)
  async setUsername(@Param('login') login: string, @Req() req, @Body() usernameDto : usernameDto)
  {
    return await this.UsersService.setUsername(login, req.body.username);
  }
  
  @Post('update/:login')
  @HttpCode(201)
  @UseInterceptors(FileInterceptor('avatar'))
  async setData(@Param('login') login: any, @Req() req, @UploadedFile() file, @Body() userDataDto : userDataDto)
  {
    if (file)
      {
        const cloud =  await this.cloudinary.uploadImage(file)
        if (cloud)
        {
          userDataDto.user_avatar = cloud['url']
          console.log();
          (userDataDto.user_avatar)
        }
      }
      
    return await this.UsersService.updateUserData(login, userDataDto);
  }

}



