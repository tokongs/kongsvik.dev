import { Box, Image, Heading, Text, useBreakpointValue, useDimensions } from "@chakra-ui/react"
import { useRef } from "react"
import { urlFor } from "../lib/sanity"
import Post from "../models/post"

interface Props {
    post: Post
}
const PostCard = ({ post }: Props) => {
    const ref = useRef(null)
    const dimensions = useDimensions(ref)
    const imageUrl = dimensions && post.mainImage &&
        urlFor(post.mainImage).size(dimensions?.borderBox.width, dimensions?.borderBox.height / 2).url()
    return (
        <Box ref={ref} w={{ base: "xs", md: "sm" }} h="sm" borderWidth="1px" borderRadius="lg" >
            {imageUrl && <Image borderTopRadius="lg" src={imageUrl} />}
            <Heading m="2" textAlign="center" as="h2" size="lg">{post.title}</Heading>
            <Text m="4" textAlign="center" noOfLines={5}>{post.body[0].children[0].text}</Text>
        </Box>
    )
}

export default PostCard