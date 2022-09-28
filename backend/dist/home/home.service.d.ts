import { HttpService } from '@nestjs/axios';
export declare class HomeService {
    private readonly HttpService;
    constructor(HttpService: HttpService);
    Home(): string;
}
