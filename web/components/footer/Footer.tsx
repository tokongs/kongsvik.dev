import {
    Box,
    Stack,
    StackProps,
    Text,
} from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';


const Footer = (props: StackProps) => {
    return (
        <Stack
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={4}
            pl={6}
            pr={6}
            direction="row"
            {...props}
        >
            <Text pt={6}>Tobias Slettemoen Kongsvik</Text>
            <Stack direction={'row'} spacing={2}>
                <SocialIcon url="https://github.com/tokongs" />
                <SocialIcon url="https://www.linkedin.com/in/tobiaskongsvik" />
            </Stack>
        </Stack>
    );
}

export default Footer;
