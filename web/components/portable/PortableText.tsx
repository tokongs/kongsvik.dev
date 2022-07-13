import { Code, Heading, Link, ListItem, OrderedList, Text, UnorderedList } from "@chakra-ui/react"
import { PortableText, PortableTextComponentProps, PortableTextMarkComponentProps, PortableTextReactComponents, PortableTextTypeComponentProps } from "@portabletext/react"
import BlockQuote from "./BlockQuote"
import PortableImage from "./PortableImage"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import CodeBlock from "./CodeBlock";
interface Props {
    value: any
}

const portableComponents: Partial<PortableTextReactComponents> = {
    types: {
        image: PortableImage,
        code: CodeBlock
    },
    marks: {
        strong: ({ children }: PortableTextMarkComponentProps<any>) => <Text fontWeight="bold">{children}</Text>,
        em: ({ children }: PortableTextMarkComponentProps<any>) => <Text as="em">{children}</Text>,
        code: ({ children }: PortableTextMarkComponentProps<any>) => <Code
            color="accent_pink.100"
            backgroundColor="blackAlpha.50"
            borderColor="blackAlpha.200"
            borderWidth={2}
            borderRadius="sm"
            px={2}
        >{children}</Code>,
        link: ({ value, children }: PortableTextMarkComponentProps<any>) => <Link color="accent_pink.100" href={value.href} fontSize="lg">{children}</Link>,
    },
    list: {
        bullet: ({ children }: PortableTextComponentProps<any>) => <UnorderedList listStylePos="inside">{children}</UnorderedList>,
        number: ({ children }: PortableTextComponentProps<any>) => <OrderedList listStylePos="inside">{children}</OrderedList>
    },
    listItem: {
        bullet: ({ children }: PortableTextComponentProps<any>) => <ListItem>{children}</ListItem>,
        number: ({ children }: PortableTextComponentProps<any>) => <ListItem>{children}</ListItem>
    },
    block: {
        h1: ({ children }: PortableTextComponentProps<any>) => <Heading as="h1" size="3xl" mb={6}>{children}</Heading>,
        h2: ({ children }: PortableTextComponentProps<any>) => <Heading as="h2" size="xl" mb={4}>{children}</Heading>,
        h3: ({ children }: PortableTextComponentProps<any>) => <Heading as="h3" size="lg" mb={4}>{children}</Heading>,
        h4: ({ children }: PortableTextComponentProps<any>) => <Heading as="h4" size="lg" mb={4}>{children}</Heading>,
        normal: ({ children }: PortableTextComponentProps<any>) => <Text mb={4}>{children}</Text>,
        blockquote: BlockQuote
    }
}

const ChakraPortableText = ({ value }: Props) => {

    return <PortableText value={value} components={portableComponents} />
}

export default ChakraPortableText