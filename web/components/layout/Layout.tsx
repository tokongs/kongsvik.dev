import { Box, Center, Heading, Text } from "@chakra-ui/react";

type LayoutProps = {
    children: React.ReactNode,
};

const Layout = ({ children }: LayoutProps) => {

    return (
        <Box w="100%">
            <Box m={6}>
               <Heading fontWeight="bold">KONGSVIK</Heading>
            </Box>
            <Center>
                {children}
            </Center>
        </Box>
    )
}

export default Layout;