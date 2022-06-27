import { Link, Flex, FlexProps, Heading, Box, IconButton, useBreakpointValue, Collapse, Stack, useDisclosure, useOutsideClick, Center, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRef } from "react";
import { MdClose, MdMenu } from "react-icons/md"
import NavLink from "./NavLink";

const Nav = (props: FlexProps) => {
    const { isOpen, onToggle, onClose } = useDisclosure()
    const collapse = useBreakpointValue([true, false, false, false])
    const ref = useRef(null)
    useOutsideClick({
        ref: ref,
        handler: onClose
    })
    const NavLinks = () => (<>
        <NavLink href="/blog" text="blog" />
        <NavLink href="/about" text="about" />
    </>)

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            py={4}
            px={{base: 2, sm: 12}}
            direction={["column", "row", "row", "row"]}
            ref={ref}
            {...props}
        >
            <Flex justify="space-between" w="100%" >
                <Spacer w="33%" display={["block", "none", "none", "none"]} />
                <Box w="33%" maxW="12em">
                    <Center>
                        <NextLink href={"/"} passHref>
                            <Link style={{ textDecoration: 'none' }}>
                                <Heading color={"accent_pink.100"} fontWeight="black">KONGSVIK</Heading>
                            </Link>
                        </NextLink>
                    </Center>
                </Box>
                <Flex w="33%" justify={"right"} display={["flex", "none", "none", "none"]}>
                    <IconButton
                        backgroundColor={"accent_yellow.100"}
                        aria-label="Navbar menu toggle"
                        onClick={onToggle}
                        icon={isOpen ? <MdClose /> : <MdMenu />}
                    />
                </Flex>
            </Flex>
            {collapse ?
                <Collapse in={isOpen} animateOpacity >
                    <Stack direction={"column"} >
                        <NavLinks />
                    </Stack>
                </Collapse> :
                <Stack direction={"row"}>
                    <NavLinks />
                </Stack>
            }

        </Flex>
    )
}

export default Nav;