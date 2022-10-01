import React from "react"
import { ContextMenu } from 'chakra-ui-contextmenu';
import { Box, Button, ChakraProvider } from '@chakra-ui/react';
import { MenuList, MenuItem } from '@chakra-ui/menu';


function  ChannelMemeber () {
  return (
  <ContextMenu
    renderMenu={() => (
      <MenuList>
        <MenuItem>Context Menu Item 1</MenuItem>
        <MenuItem>Context Menu Item 2</MenuItem>
      </MenuList>
    )}
  >
    {/* {ref => (<div ref={ref}>Target</div>)} */}
  </ContextMenu>
  // <div>
  //   lkkjlkjlkj
  // </div>
  )
}

export default ChannelMemeber;