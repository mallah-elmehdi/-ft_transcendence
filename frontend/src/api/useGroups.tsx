import axios from "axios";
import React, { useEffect, useState } from "react";
import { API, GROUP, USER_URL } from "../constants";
import { ChatContext } from "../State/ChatProvider";

const useGroups = () => {
  const [group, setGroup] = useState<any>({});
  const [groupData, setGroupData] = useState<any>([]);
  const { setGroups, groups} = React.useContext<any>(ChatContext);

  useEffect(() => {
    axios
      .get(GROUP + "all")
      .then((res: any) => {
        // console.log('effect');
        
        setGroup(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    for (var i = 0; i < group.length; i++) {
      axios
        .get(GROUP + group[i].roomId)
        .then((res: any) => {
          setGroupData((data: any) => {
            return [
              ...data,
              {
                id: res.data.room_id,
                name: res.data.room_name,
                avatar: res.data.room_avatar,
                type: res.data.room_type,
              },
            ];
          });
          // console.log({
          //   id: res.data.room_id,
          //   name: res.data.room_name,
          //   avatar: res.data.room_avatar,
          //   type: res.data.room_type,
          // },)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [group]);

  useEffect(() => {
    // console.log(groupData);
    
    setGroups(groupData);
  }, [groupData]);
};

export default useGroups;
