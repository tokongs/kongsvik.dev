import {
    Box,
    Stack,
    StackProps,
    Text,
} from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';


const Footer = (props: StackProps) => {
    return (
        <Stack direction={'row'} spacing={2} m={4}>
            <SocialIcon url="https://github.com/tokongs" bgColor='#777' />
            <SocialIcon url="https://www.linkedin.com/in/tobiaskongsvik" bgColor='#777' />
            <SocialIcon url="mailto:tobias@kongsvik.dev" bgColor="#777" />
        </Stack>
    );
}

export default Footer;
