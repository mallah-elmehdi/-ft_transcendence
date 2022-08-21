import logo from '../assets/PonGame.png';
import {Image} from "@chakra-ui/react";

export default function Logo(props) {
    return (
        <Image src={logo} width={"200px"} {...props}></Image>
    )
}
