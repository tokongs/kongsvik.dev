import { Box, Text } from "@chakra-ui/react"
import { PortableTextComponentProps } from "@portabletext/react"

const BlockQuote = ({ children }: PortableTextComponentProps<any>) => {
    return (
    <Box ml={2} backgroundColor="blackAlpha.50" borderColor="accent_pink.100" borderLeftWidth={4} padding={4}>
        <Text fontSize="lg">{children}</Text>
    </Box>)


}

export default BlockQuote