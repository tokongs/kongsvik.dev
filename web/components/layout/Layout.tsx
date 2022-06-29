import { Box, Flex} from "@chakra-ui/react";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";

type LayoutProps = {
    children: React.ReactNode,
};

const Layout = ({ children }: LayoutProps) => {

    return (
        <Flex w="100%" h={"100vh"} direction={"column"}>
            <Nav m={0} />
            <Box w="100%" m={"auto"} >
                {children}
            </Box>
            <Footer mt={"auto"} />
        </Flex>
    )
}

export default Layout;