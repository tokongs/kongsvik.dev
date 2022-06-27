import NextLink from "next/link";
import { Link, Text } from "@chakra-ui/react";

interface Props {
    href: string;
    text: string;
}
const NavLink = ({href, text}: Props) => {
    return (
        <NextLink href={href} passHref>
            <Link style={{ textDecoration: 'none' }}>
                <Text _hover={{ color: "accent_pink.100" }} my="auto" transitionDuration={"0.3s"} textTransform={"uppercase"}>
                   {text} 
                </Text>
            </Link>
        </NextLink>
    )
}

export default NavLink;