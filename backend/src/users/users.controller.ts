import { Controller, Get, Redirect, Query, Param} from '@nestjs/common';
import { UsersService } from './users.service';



@Controller('users')
export class UsersController {

  constructor(private readonly UsersService: UsersService) {}

  @Get(':id')
  async getUser(@Param() login : any)
  {
    
    return await this.UsersService.getUser(login.id);
  }

 
}
