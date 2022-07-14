import { Center, Flex, Heading, Image } from "@chakra-ui/react";
import { useCatch } from "@remix-run/react";

interface ErrorProps {
    img: string;
    alt: string;
    text: string;
}

const Error = ({img, text, alt}: ErrorProps) => (
    <Center pt={0}>
        <Flex direction="column" m={8}>
            <Heading as="h1" size="xl" mb={16} textAlign="center">{text}</Heading>
            <Image maxW="lg" src={img} alt={alt}/>
        </Flex >
    </Center>
)

export const CatchBoundary = () => {
    const caught = useCatch();
    if (caught.status) return <Error img="/NotFound.svg" alt="Not Found" text="This page does not exist :("/>
    return <Error img="/Error.svg" alt="Error. Squashing bugs" text="Something went horribly wrong :("/>
}

const NotFound = () => <Error img="/NotFound.svg" alt="Not Found" text="This page does not exist :("/>

export default NotFound
