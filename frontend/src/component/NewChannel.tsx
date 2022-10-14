import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { ChatContext } from "../State/ChatProvider";
import ChangeAvatar from "./ChangeAvatar";
import axios from "axios";
import { GROUP } from "../constants";
import useGroups from "../api/useGroups";

function NewChannel() {
  const { toggleNewChannel } = useContext<any>(ChatContext);
  const [channelName, setChannelName] = useState<any>("");
  const [image, setImage] = useState(null);

  const uploadRoomInfo = () => {
    if (channelName.trim()) {
      axios.defaults.withCredentials = true;
      axios
        .post(
          GROUP,
          {
            room_name: channelName,
            room_type: "private",
          }
          //   {
          //     headers: {
          //       "Content-Type": "multipart/form-data",
          //     },
          //   }
        )
        .then((response) => {
          console.log(response);
        //   FIXME: call alert notify when channel creted
        // useGroups();
        toggleNewChannel();
    })
    .catch((error) => {
            //   FIXME: call alert notify when channel not created
          console.log(error);
          toggleNewChannel();
        });
    }
  };

  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === "Escape") {
        event.preventDefault();
        toggleNewChannel();
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });
  return (
    <VStack w={"100%"} h={"100%"} position={"relative"}>
      <HStack as={"button"} px={5} w={"100%"} m={0} h={""}>
        <ArrowBackIcon
          m={0}
          mr={25}
          p={0}
          h={30}
          fontSize={25}
          onClick={() => toggleNewChannel()}
        />
        <Text fontSize={20}>New Room</Text>
      </HStack>
      <VStack w={"100%"} h={"100%"} px={5}>
        <Box my={50}>
          <ChangeAvatar callBack={setImage} tooltip={"add room avatar"} />
        </Box>
        <FormControl>
          <FormLabel>Room name</FormLabel>
          <Input
            type="text"
            value={channelName}
            onChange={(e) => {
              setChannelName(e.target.value);
            }}
          />
        </FormControl>
      </VStack>
      {channelName.trim() && (
        <Box
          position={"absolute"}
          right={4}
          bottom={0}
          rounded={30}
          onClick={uploadRoomInfo}
        >
          <IconButton
            fontSize={24}
            w={14}
            h={14}
            rounded={30}
            bg={"customPurple"}
            variant={"ghost"}
            aria-label={"new room"}
            icon={<ArrowForwardIcon />}
          />
        </Box>
      )}
    </VStack>
  );
}

export default NewChannel;
