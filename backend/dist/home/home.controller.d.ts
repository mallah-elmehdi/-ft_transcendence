import { HomeService } from './home.service';
export declare class HomeController {
    private readonly HomeService;
    UID: string;
    SECRET: string;
    constructor(HomeService: HomeService);
    Home(param: any, query: any): string;
}
