import { Box, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"
import { useNextSanityImage } from "../lib/sanity"
import Post from "../models/post"

interface Props {
    post: Post
}
const PostCard = ({ post }: Props) => {
    const imageProps = useNextSanityImage({ src: post.mainImage, width: 800, height: 400 })
    return (
        <Box w={{ base: "xs", md: "sm" }} h="sm" borderWidth="1px" borderRadius="lg" >
            <Image {...imageProps}  style={{ borderTopRightRadius: "0.5rem", borderTopLeftRadius: "0.5rem" }} layout="responsive" width="100%" height="50%" />
            <Heading m="2" textAlign="center" as="h2" size="lg">{post.title}</Heading>
            <Text m="4" textAlign="center" noOfLines={5}>{post.body[0].children[0].text}</Text>
        </Box>
    )
}

export default PostCard