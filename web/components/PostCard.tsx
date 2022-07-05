import { Box, Heading, Image, Text } from "@chakra-ui/react"
import { urlFor } from "lib/sanity"
import Post from "../models/post.server"

interface Props {
    post: Post
}
const PostCard = ({ post }: Props) => {
    const img = urlFor(post.mainImage).size(400, 200).url()
    return (
        <Box w={{ base: "xs", md: "sm" }} h="sm" borderWidth="1px" borderRadius="lg" >
            <Image src={img} w="100%" h="50%" borderTopRadius="lg"/>
            <Heading m="2" textAlign="center" as="h2" size="lg">{post.title}</Heading>
            <Text m="4" textAlign="center" noOfLines={5}>{post.body[0].children[0].text}</Text>
        </Box>
    )
}

export default PostCard