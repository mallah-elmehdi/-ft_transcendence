export declare class usernameDto {
    username: string;
}
export declare class userDataDto {
    user_avatar?: string;
    user_name?: string;
    facebook?: string;
    discord?: string;
    instagram?: string;
}
export declare class RoomInfoDto {
    room_name: string;
    room_type: string;
    room_password?: string;
    room_avatar?: string;
}
export declare class AddedUsersDto {
    room_id: number;
    room_password?: string;
}
