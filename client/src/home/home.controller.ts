import { Controller, Get, Redirect, Query, Param} from '@nestjs/common';
import { HomeService } from './home.service';



@Controller('not working')
export class HomeController {
  UID: string =
    'ce727ba64e926d218a26a068bf84f2bfc42092d81728eab579bde69a2645995c';
  SECRET: string =
    '83712e0959622d35ad0f28c6ea8ef51fdf03d12283bc18baf99f8fbe80649288';

  constructor(private readonly HomeService: HomeService) {}

  @Get()
  @Redirect(
    `https://api.intra.42.fr/oauth/authorize?client_id=a28f018c5e3443ffb7d0b9131b6b26d085cc6974824bc2e017da6f8b5868ae42&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&response_type=code`,
    302,
  )
  Home(@Param() param, @Query() query: any) {
    return this.HomeService.Home();
  }

}
