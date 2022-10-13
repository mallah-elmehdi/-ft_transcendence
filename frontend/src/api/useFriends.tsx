import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../constants";
import { ChatContext } from "../State/ChatProvider";

const useFriends = () => {
  const [friend, setFriend] = useState<any>({});
  const [friendsData, setFriendsData] = useState<any>([]);
  const { setFriends } = React.useContext<any>(ChatContext);

  useEffect(() => {
    axios
      .get(API + "user/friends")
      .then((res: any) => {
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
        .then((res: any) => {
          setFriendsData((data: any) => {
            return [
              ...data,
              {
                id: res.data.user_id,
                name: res.data.user_name,
                avatar: res.data.user_avatar,
              },
            ];
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [friend]);

  useEffect(() => {
    console.log(friendsData);
    
    // setFriends(friendsData);
  }, [friendsData]);
};

export default useFriends;
