import axios from "axios";
import React, { useEffect, useState } from "react";
import { GROUP } from "../constants";
import { ChatContext } from "../State/ChatProvider";
import { GlobalContext } from "../State/Provider"

const useGroups = () => {
  const { setGroups, groups} = React.useContext<any>(ChatContext);
  
  useEffect(() => {
    axios
      .get(GROUP + "all")
      .then((res: any) => {
        const gr:any = []
        for (var i = 0; i < res.data.length; i++) {
          axios
          .get(GROUP + res.data[i].roomId)
            .then((res: any) => {
              gr.push({
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
        setGroups(gr);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

};

export default useGroups;
