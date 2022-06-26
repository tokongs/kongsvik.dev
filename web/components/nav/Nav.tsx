import { Text, Link, Flex, FlexProps, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

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
                <NextLink href={"/"} passHref>
                    <Link style={{ textDecoration: 'none' }}>
                        <Heading color={"accent_pink.100"} fontWeight="black">KONGSVIK</Heading>
                    </Link>
                </NextLink>
            </Flex>
            <Flex align="center" mr={"12em"}>
                <NextLink href={"/blog"} passHref>
                    <Link style={{ textDecoration: 'none' }}>
                        <Text fontSize={"2em"} _hover={{ color: "accent_pink.100" }} transitionDuration={"0.5"}>
                            BLOG
                        </Text>
                    </Link>
                </NextLink>
            </Flex>
        </Flex>
    )
}

export default Nav;