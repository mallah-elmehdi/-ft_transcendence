import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { HttpModule } from '@nestjs/axios';
import { HomeController } from './home/home.controller';
import { HomeService } from './home/home.service';
import {ConfigModule} from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { chatController } from './chat/chat.controller';
import { PrismaModule } from './prisma/prisma.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [AuthModule, HttpModule, ConfigModule.forRoot(), PrismaModule,
	 ServeStaticModule.forRoot({rootPath: join(__dirname, '..','public'),})],
  controllers: [HomeController, chatController],
  providers: [HomeService],
})
export class AppModule {}


//https://docs.nestjs.com/recipes/serve-static
//https://stackoverflow.com/questions/63285055/nestjs-how-to-use-env-variables-in-main-app-module-file-for-database-connecti