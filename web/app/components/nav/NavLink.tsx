import { Link as RemixLink } from "@remix-run/react";
import { Heading, HeadingProps, Link, Text } from "@chakra-ui/react";

interface Props {
    to: string;
    text: string;
}
const NavLink = ({ to, text, ...rest}: Props & HeadingProps) => {
    return (
        <Heading {...rest} size="md" _hover={{ color: "accent_pink.100" }} transitionDuration={"0.3s"} textTransform={"uppercase"} textAlign="center" fontWeight="normal">
            <RemixLink to={to} prefetch="intent">
                {text}
            </RemixLink>
        </Heading>
    )
}

export default NavLink;