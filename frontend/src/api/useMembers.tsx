import axios from "axios";
import { group } from "console";
import React, { useContext } from "react";
import { MEMBERS, USER_URL } from "../constants";
import { ChatContext } from "../State/ChatProvider";

const useMembers = () => {
  const { selectedChat } = useContext<any>(ChatContext);
  const { setRoomMembers, roomMembers } = useContext<any>(ChatContext);
  const [localMem, setLocalMem] = React.useState<any>([]);

  // {membership_id: 1, roomId: 1, userId: 1, prev: 'owner', created_at: '2022-10-13T23:27:11.871Z'}

  React.useEffect(() => {
    axios
      .get(MEMBERS + selectedChat.id)
      .then((res: any) => {
        const ids = [];
        for (var i = 0; i < res.data.length; i++) {
          ids.push({
            id: res.data[i]?.userId,
            role: res.data[i]?.prev,
          });
          // console.log("ids", ids);
          setLocalMem(ids);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    const members: any = [];
    for (var i = 0; i < localMem.length; i++) {
      axios
        .get(USER_URL + localMem[i].id)
        .then((res: any) => {
          members.push({
            id: res.data.user_id,
            name: res.data.user_name,
            avatar: res.data.user_avatar,
            role: localMem[i]?.role,
          });
        })
        .catch((err) => {
          console.log(err);
        });
        setRoomMembers(members);
    }
  }, [localMem]);
};

export default useMembers;
