import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class HomeService {

    constructor(private readonly HttpService : HttpService,) {}

  Home() {
    return "Home";
  }

 
  
}
