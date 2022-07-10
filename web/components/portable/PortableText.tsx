import { Code, Heading, Link, ListItem, OrderedList, Text, UnorderedList } from "@chakra-ui/react"
import { PortableText, PortableTextComponentProps, PortableTextMarkComponentProps, PortableTextReactComponents, PortableTextTypeComponentProps } from "@portabletext/react"
import BlockQuote from "./BlockQuote"
import PortableImage from "./PortableImage"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
interface Props {
    value: any
}

const portableComponents: Partial<PortableTextReactComponents> = {
    types: {
        image: PortableImage,
        code: ({ value }: PortableTextTypeComponentProps<any>) => <SyntaxHighlighter style={atomOneLight} language={"javascript"}>{value.code}</SyntaxHighlighter>
    },
    marks: {
        strong: ({ children }: PortableTextMarkComponentProps<any>) => <Text fontWeight="bold" fontSize="lg">{children}</Text>,
        em: ({ children }: PortableTextMarkComponentProps<any>) => <Text as="em" fontSize="lg">{children}</Text>,
        code: ({ children }: PortableTextMarkComponentProps<any>) => <Code
            color="accent_pink.100"
            backgroundColor="blackAlpha.50"
            fontSize="lg"
            borderColor="blackAlpha.200"
            borderWidth={2}
            borderRadius="sm"
            px={2}
        >{children}</Code>,
        link: ({ value, children }: PortableTextMarkComponentProps<any>) => <Link color="accent_pink.100" href={value.href} fontSize="lg">{children}</Link>,
    },
    list: {
        bullet: ({ children }: PortableTextComponentProps<any>) => <UnorderedList>{children}</UnorderedList>,
        number: ({ children }: PortableTextComponentProps<any>) => <OrderedList>{children}</OrderedList>
    },
    listItem: {
        bullet: ({ children }: PortableTextComponentProps<any>) => <ListItem fontSize="lg">{children}</ListItem>,
        number: ({ children }: PortableTextComponentProps<any>) => <ListItem fontSize="lg">{children}</ListItem>
    },
    block: {
        h1: ({ children }: PortableTextComponentProps<any>) => <Heading as="h1" size="4xl">{children}</Heading>,
        h2: ({ children }: PortableTextComponentProps<any>) => <Heading as="h2" size="3xl">{children}</Heading>,
        h3: ({ children }: PortableTextComponentProps<any>) => <Heading as="h3" size="2xl">{children}</Heading>,
        h4: ({ children }: PortableTextComponentProps<any>) => <Heading as="h4" size="xl">{children}</Heading>,
        normal: ({ children }: PortableTextComponentProps<any>) => <Text fontSize="lg">{children}</Text>,
        blockquote: BlockQuote
    }
}

const ChakraPortableText = ({ value }: Props) => {

    return <PortableText value={value} components={portableComponents} />
}

export default ChakraPortableText