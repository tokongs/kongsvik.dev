import { Box, Flex} from "@chakra-ui/react";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";

type LayoutProps = {
    children: React.ReactNode,
};

const Layout = ({ children }: LayoutProps) => {

    return (
        <Flex w="100%" h={"100vh"} direction={"column"}>
            <Nav px={6} py={4}/>
            <Box w="100%" pt={12} mb="auto" >
                {children}
            </Box>
            <Footer mt={"auto"} />
        </Flex>
    )
}

export default Layout;