import { Link, Flex, FlexProps, Heading, Box, IconButton, Stack, useDisclosure, useOutsideClick, Center, Show, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Input, HeadingProps } from "@chakra-ui/react";
import { Link as RemixLink } from "@remix-run/react";
import { MdMenu } from "react-icons/md"
import NavLink from "./NavLink";

const Nav = (props: FlexProps) => {
    const { isOpen, onToggle, onClose } = useDisclosure()
    const NavLinks = (props: HeadingProps) => (<>
        <NavLink to="/" text="Home" {...props} />
        <NavLink to="/about" text="about" {...props} />
    </>)

    return (
        <Flex justify="space-between" w="100%" {...props}>
            <Box>
                <Center>
                    <Heading color={"accent_pink.100"} fontWeight="black">
                        <Link as={RemixLink} to="/" style={{ textDecoration: 'none' }}>
                            KONGSVIK
                        </Link>
                    </Heading>
                </Center>
            </Box>
            <Flex justify={"right"} display={["flex", "none", "none", "none"]}>
                <IconButton
                    backgroundColor="inherit"
                    _hover={{ color: "accent_pink.100" }}
                    aria-label="Navbar menu toggle"
                    onClick={onToggle}
                    icon={<MdMenu />}
                />
            </Flex>
            <Show above="sm">
                <Stack direction={"row"}>
                    <NavLinks />
                </Stack>
            </Show>
            <Show below="sm">
                <Drawer isOpen={isOpen} placement='right' onClose={onClose} size="xs">
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton backgroundColor="inherit" _hover={{ color: "accent_pink.100" }} />
                        <DrawerHeader textAlign="center" color="accent_pink.100">KONGSVIK</DrawerHeader>
                        <DrawerBody>
                            <NavLinks mb={4} />
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Show>
        </Flex>
    )
}

export default Nav;