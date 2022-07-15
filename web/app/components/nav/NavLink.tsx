import { Link as RemixLink} from "@remix-run/react";
import { Link, Text } from "@chakra-ui/react";

interface Props {
    to: string;
    text: string;
}
const NavLink = ({to, text}: Props) => {
    return (
        <RemixLink to={to} prefetch="intent">
                <Text _hover={{ color: "accent_pink.100" }} my="auto" transitionDuration={"0.3s"} textTransform={"uppercase"} textAlign="center">
                   {text} 
                </Text>
        </RemixLink>
    )
}

export default NavLink;