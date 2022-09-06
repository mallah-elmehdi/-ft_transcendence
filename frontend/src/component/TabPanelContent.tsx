import {VStack} from "@chakra-ui/react"

type Props = {
    children: JSX.Element[],
}
const TabPanelContent = ({children}: Props) => {

    return (
        <VStack
            h={'100%'}
            spacing={0} w={'100%'}
        >
            {children}
        </VStack>
    );
};
export default TabPanelContent;