import { Flex, Heading } from "@chakra-ui/react";

const Nav = () => {

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={6}
            p={6}
        >
            <Flex align="center">
                <Heading color="accent_pink.100" fontWeight="black">KONGSVIK</Heading>
            </Flex>
        </Flex>
    )
}

export default Nav;