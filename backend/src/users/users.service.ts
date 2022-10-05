import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {

    constructor(private readonly prisma : PrismaService,) {}

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
}
