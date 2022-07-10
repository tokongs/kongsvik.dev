import { Box, Heading, Image, LinkBox, LinkOverlay, Text } from "@chakra-ui/react"
import { Link } from "@remix-run/react"
import { useSanityChakraImageProps } from "lib/sanity"
import Post from "../models/post.server"

interface Props {
    post: Post
}
const PostCard = ({ post }: Props) => {
    const imgProps = useSanityChakraImageProps({ src: post.mainImage, width: 800, height: 400 })
    return (
        <LinkBox as="article" w={{ base: "2xs", sm: "xs", md: "md" }} h={{ base: "2xs", sm: "xs", md: "md" }} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image {...imgProps} w="100%" h="50%" borderTopRadius="lg" />
            <Heading m="2" textAlign="center" as="h2" size="lg">
                <LinkOverlay as={Link} to={post.slug.current}>
                    {post.title}
                </LinkOverlay>
            </Heading>
            <Text m="4" textAlign="center" noOfLines={5}>{post.body[0].children[0].text}</Text>
        </LinkBox>
    )
}

export default PostCard