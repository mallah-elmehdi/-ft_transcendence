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
        setGroup(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const groups:any = []
    for (var i = 0; i < group.length; i++) {
      axios
        .get(GROUP + group[i].roomId)
        .then((res: any) => {
          groups.push({
            id: res.data.room_id,
            name: res.data.room_name,
            avatar: res.data.room_avatar,
            type: res.data.room_type,
          })
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setGroups(()=> groups);
  }, [group]);

};

export default useGroups;
