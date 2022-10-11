import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../constants";
type Props ={
  setFriends : (params : any)=> void, 
}
const Friends = ({setFriends}:Props) => {
  const [friend, setFriend] = useState<any>({});
  // const [singlefrnd, setSingleFrnd] = useState<any>({});
  const [frinedsData, setFriendsData] = useState<any>([]);

  // const tst = res.data.map((friend:any)=>{
  //     return axios.get("http://10.11.8.3:3001" + `/user/${friend.friendId}`).then
  // }

  useEffect(() => {
    // console.log('one');
    axios
    .get(API + "/user/friends")
    .then((res:any) => {
      setFriend(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
    
  }, []);

  useEffect(() => {
    for (var i = 0; i < friend.length; i++) {
      axios
        .get(API + `/user/${friend[i].friendId}`)
        .then((res:any) => {
          setFriendsData((data:any)=>{
            return [
              ...data,
              {id: res.data.user_id, name: res.data.user_name, avatar: res.data.user_avatar}
            ]
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [friend]);

  useEffect(()=>{
    setFriends(frinedsData)
  }, [frinedsData])

  // return frinedsData;
};

export default Friends;
