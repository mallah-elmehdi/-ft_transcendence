import logo from '../assets/PonGame.png';
import {
    Heading,
    Image,
    Text,
    useColorModeValue
} from "@chakra-ui/react";

export default function Logo(props) {
    return (
        // <Image src={logo} width={"170px"} {...props}></Image>
        <Heading
            _dark={{ color: 'white' }} _light={{ color: '#000000' }}
        >
            Pon
            <Text as={"span"} color={'red'}>G</Text>
            ame
        </Heading>
    )
}
