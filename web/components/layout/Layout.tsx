import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import Nav from "../nav/Nav";

type LayoutProps = {
    children: React.ReactNode,
};

const Layout = ({ children }: LayoutProps) => {

    return (
        <Box w="100%" minH="100vh">
            <Nav /> 
            <Center>
                {children}
            </Center>
        </Box>
    )
}

export default Layout;