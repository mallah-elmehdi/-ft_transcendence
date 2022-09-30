import { Controller, Get, Redirect, Query, Param, Req, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import {Request} from 'express';
import { AuthGuard } from '@nestjs/passport';


@Controller('user')
export class UsersController {

  constructor(private readonly UsersService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getUser(@Req() req : Request)
  {
    
    return await this.UsersService.getUser(req.user['userLogin']);
  }
}
