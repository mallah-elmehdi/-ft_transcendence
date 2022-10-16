import { Controller, Get } from '@nestjs/common';

@Controller('play')
export class GameController {
  @Get()
  game() {
    return 'Welcome User';
  }
}
