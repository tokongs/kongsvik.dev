import { Link, Flex, FlexProps, Heading, Box, IconButton, useBreakpointValue, Collapse, Stack, useDisclosure, useOutsideClick, Center, Spacer, Divider } from "@chakra-ui/react";
import { Link as RemixLink} from "@remix-run/react";
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
        <NavLink to="/" text="Home"/>
        <NavLink to="/blog" text="blog" />
        <NavLink to="/about" text="about" />
    </>)

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            py={4}
            px={{ base: 2, sm: 12 }}
            direction={["column", "row", "row", "row"]}
            ref={ref}
            {...props}
        >
            <Flex justify="space-between" w="100%" >
                <Spacer w="33%" display={["block", "none", "none", "none"]} />
                <Box w="33%" maxW="12em">
                    <Center>
                        <RemixLink to="/">
                            <Link style={{ textDecoration: 'none' }}>
                                <Heading color={"accent_pink.100"} fontWeight="black">KONGSVIK</Heading>
                            </Link>
                        </RemixLink>
                    </Center>
                </Box>
                <Flex w="33%" justify={"right"} display={["flex", "none", "none", "none"]}>
                    <IconButton
                        backgroundColor="inherit"
                        _hover={{color: "accent_pink.100"}} 
                        aria-label="Navbar menu toggle"
                        onClick={onToggle}
                        icon={isOpen ? <MdClose /> : <MdMenu />}
                    />
                </Flex>
            </Flex>
            {collapse ?
                <Collapse in={isOpen} animateOpacity>
                    <Divider w={32}/>
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