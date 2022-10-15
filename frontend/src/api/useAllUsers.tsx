import axios from "axios";
import React, { useEffect, useState } from "react";
import { GROUP, ALL_USERS } from "../constants";
import { ChatContext } from "../State/ChatProvider";

const useAllUsers = () => {
  const { allUsers, setAllUsers } = React.useContext<any>(ChatContext);

  useEffect(() => {
    axios
      .get(ALL_USERS)
      .then((res: any) => {
        console.log(res.data);
        setAllUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
};

export default useAllUsers;
