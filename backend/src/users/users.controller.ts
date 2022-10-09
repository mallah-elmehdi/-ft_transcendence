import { Controller, Get, Redirect, Query, Param, Req, UseGuards, Post, UseInterceptors, UploadedFile, MaxFileSizeValidator, FileTypeValidator, ParseFilePipe, HttpCode, Body, Module, BadRequestException} from '@nestjs/common';
import { UsersService } from './users.service';
import {Request} from 'express';
import { AuthGuard } from '@nestjs/passport';
import { Express } from 'express'
import { FileInterceptor, MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Observable, of } from 'rxjs';
import { usernameDto, userDataDto} from './DTO/username.dto'
import { CloudinaryService } from './clodinary/clodinary.service';


@Controller('user')
@UseGuards(AuthGuard('jwt'))
export class UsersController {

  constructor(private readonly UsersService: UsersService, private cloudinary: CloudinaryService) {}

  @Get('me')
  @HttpCode(200)
  async getMe(@Req() req : Request)
  {
    return await this.UsersService.getUser(req.user['userLogin']);
  }
  @Get(':login')
  async getUser(@Param('login') login:string)
  {
    return await this.UsersService.getUser(login);
  }
  
  @Post(':login/avatar')
  @HttpCode(201)
  @UseInterceptors(FileInterceptor('avatar'))
  async uploadImageToCloudinary(@UploadedFile() file) 
  {
    return await this.cloudinary.uploadImage(file).catch((err) => {
      throw new BadRequestException(err);
    });
    ;
    // .catch(() => {
      //   throw new BadRequestException('Invalid file type.');
      // }
      // );
      //   @UseInterceptors(FileInterceptor('avatar',  {
        //     storage : diskStorage({ 
          //       destination: './avatars',
          //       filename: (req, file, cb) => {
            //         const filename : string = req.params.login;
            //         // console.log('filename', req.params.login);
            //         const extension : string = '.' + file.originalname.split('.').pop();
            //         // console.log('extension', `${filename}${extension}`);
            //         console.log('file', file);
            //         cb(null, `${filename}${extension}`)
            //       }
            //       })
            //     }))
            //   UploadedFile( @Param('login') login:string, @UploadedFile() file): Observable<Object> {
              
              //     console.log('file', file);
//     // return file;
//     return of({ imagePath : file.path });
//     // return this.UsersService.uploadAvatar(login, file);

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
  async setData(@Param('login') login: string, @Req() req, @UploadedFile() file, @Body() userDataDto : userDataDto)
  {
    // if (file)
    //   console.log("file exceet")
    // else
    // console.log("file not")
    if (file)
      {
        const cloud =  await this.cloudinary.uploadImage(file)
        if (cloud)
        {
          userDataDto.user_avatar = cloud['url']
        }
      }
      
    return await this.UsersService.updateUserData(login, userDataDto);
  }
    
}

