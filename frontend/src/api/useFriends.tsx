import axios from "axios";
import React, { useEffect, useState } from "react";
import { API, FRIENDS_URL, USER_URL } from "../constants";
import { ChatContext } from "../State/ChatProvider";
import { GlobalContext } from "../State/GlobalProvider";

const useFriends = () => {
  const [friend, setFriend] = useState<any>({});
  const [friendsData, setFriendsData] = useState<any>([]);
  const { setFriends } = React.useContext<any>(ChatContext);

  useEffect(() => {
    axios
      .get(FRIENDS_URL)
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
        .get(USER_URL + friend[i].friendId)
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
    setFriends(friendsData);
  }, [friendsData]);
};

export default useFriends;
