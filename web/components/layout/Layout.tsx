import { Box, Center, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";

type LayoutProps = {
    children: React.ReactNode,
};

const Layout = ({ children }: LayoutProps) => {

    return (
        <Flex w="100%" h={"100vh"} direction={"column"}>
            <Nav m={0} />
            <Box m={"auto"}>
                {children}
            </Box>
            <Footer mt={"auto"} />
        </Flex>
    )
}

export default Layout;