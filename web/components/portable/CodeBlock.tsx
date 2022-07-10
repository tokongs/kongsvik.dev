import { Box, Text } from "@chakra-ui/react"
import { PortableTextTypeComponentProps } from "@portabletext/react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneLight } from "react-syntax-highlighter/dist/cjs/styles/hljs"

interface CodeBlock {
    code: string
    language: string
    filename?: string
}

const CodeBlock = ({ value }: PortableTextTypeComponentProps<CodeBlock>) => {
    return (
        <Box 
            backgroundColor="blackAlpha.50"
            borderColor="blackAlpha.200"
            borderWidth={2}
            borderRadius="sm"
        >
            {value.filename && <Text m={2} ml={4} fontSize={"lg"}>{value.filename}</Text>}
            <SyntaxHighlighter style={atomOneLight} showLineNumbers language={value.language}>{value.code}</SyntaxHighlighter>
        </Box>
    )
}

export default CodeBlock