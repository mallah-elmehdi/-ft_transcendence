import logo from '../assets/PonGame.png';
import {
    Heading,
    Image,
    Text,
    useColorModeValue
} from "@chakra-ui/react";

export default function Logo(props) {
    const logoColor = useColorModeValue('#000000', 'white')
    return (
        // <Image src={logo} width={"170px"} {...props}></Image>
        <Heading color={logoColor}>
            Pon
            <Text as={"span"} color={'red'}>G</Text>
            ame
        </Heading>
    )
}
