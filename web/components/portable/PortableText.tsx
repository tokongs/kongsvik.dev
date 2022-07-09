import { Heading, Link, List, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { PortableText, PortableTextBlockComponent, PortableTextComponentProps, PortableTextMarkComponentProps, PortableTextReactComponents } from "@portabletext/react"
import BlockQuote from "./BlockQuote"
import PortableImage from "./PortableImage"

interface Props {
    value: any 
}

const portableComponents: Partial<PortableTextReactComponents> = {
    types: {
        image: PortableImage,
    },
    marks: {
        strong: ({children}: PortableTextMarkComponentProps<any>) => <Text fontWeight="bold" fontSize="lg">{children}</Text>,
        em: ({children}: PortableTextMarkComponentProps<any>) => <Text as="em" fontSize="lg">{children}</Text>,
        link: ({value, children}: PortableTextMarkComponentProps<any>) => <Link color="accent_pink.100" href={value.href} fontSize="lg">{children}</Link>,
    },
    list: {
        bullet: ({children}: PortableTextComponentProps<any>) => <UnorderedList>{children}</UnorderedList>
    },
    listItem: {
        bullet: ({children}: PortableTextComponentProps<any>) => <ListItem fontSize="lg">{children}</ListItem>
    },
    block: {
        h1: ({children}: PortableTextComponentProps<any>) => <Heading as="h1" size="4xl">{children}</Heading>,
        h2: ({children}: PortableTextComponentProps<any>) => <Heading as="h2" size="3xl">{children}</Heading>,
        h3: ({children}: PortableTextComponentProps<any>) => <Heading as="h3" size="2xl">{children}</Heading>,
        h4: ({children}: PortableTextComponentProps<any>) => <Heading as="h4" size="xl">{children}</Heading>,
        normal: ({children}: PortableTextComponentProps<any>) => <Text fontSize="lg">{children}</Text>,
        blockquote: BlockQuote
    }
}

const ChakraPortableText = ({value}: Props) => {

    return <PortableText value={value} components={portableComponents}/>
}

export default ChakraPortableText