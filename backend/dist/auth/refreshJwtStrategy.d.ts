import { Strategy } from 'passport-jwt';
import { Request } from 'express';
declare const refreshJwtStrategy_base: new (...args: any[]) => Strategy;
export declare class refreshJwtStrategy extends refreshJwtStrategy_base {
    constructor();
    validate(req: Request, payload: any): any;
}
export {};
