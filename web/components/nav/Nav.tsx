import { Flex, FlexProps, Heading } from "@chakra-ui/react";

const Nav = (props: FlexProps) => {

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            py={4}
            px={12}
            {...props}
        >
            <Flex align="center">
                <Heading color={"accent_pink.100"} fontWeight="black">KONGSVIK</Heading>
            </Flex>
            <Flex align="center" mr={"12em"}>
                <Heading size={"md"}>BLOG</Heading>
            </Flex>
        </Flex>
    )
}

export default Nav;