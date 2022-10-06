import { Controller, Get, Redirect, Query, Param, Req, UseGuards, Post, UseInterceptors, UploadedFile, MaxFileSizeValidator, FileTypeValidator, ParseFilePipe, HttpCode} from '@nestjs/common';
import { UsersService } from './users.service';
import {Request} from 'express';
import { AuthGuard } from '@nestjs/passport';
import { Express } from 'express'
import { FileInterceptor, MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Observable, of } from 'rxjs';


@Controller('user')
@UseGuards(AuthGuard('jwt'))
export class UsersController {

  constructor(private readonly UsersService: UsersService) {}

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
  @UseInterceptors(FileInterceptor('avatar',  {
    storage : diskStorage({ 
      destination: './avatars',
      filename: (req, file, cb) => {
        const filename : string = req.params.login;
        // console.log('filename', req.params.login);
        const extension : string = '.' + file.originalname.split('.').pop();
        // console.log('extension', `${filename}${extension}`);
        console.log('file', file);
        cb(null, `${filename}${extension}`)
      }
      })
    }))
  UploadedFile( @Param('login') login:string, @UploadedFile() file): Observable<Object> {

    console.log('file', file);
    // return file;
    return of({ imagePath : file.path });
    // return this.UsersService.uploadAvatar(login, file);
  
}
  
}

