import { Box, Heading, Image, LinkBox, LinkOverlay, Text } from "@chakra-ui/react"
import { Link } from "@remix-run/react"
import { useSanityChakraImageProps } from "app/lib/sanity"
import { dateToDisplayString } from "app/lib/utils"
import Post from "../models/post.server"

interface Props {
    post: Post
}
const PostCard = ({ post }: Props) => {
    const imgProps = useSanityChakraImageProps({ src: post.mainImage, width: 800, height: 400 })
    const publishDate = new Date(post.publishedAt)
    return (
        <LinkBox as="article" w={{ base: "2xs", sm: "md", md: "md" }} h="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image {...imgProps} w="100%" borderTopRadius="lg" />
            <Box textAlign="center" >
                <Heading mt="2" as="h2" size="lg">
                    <LinkOverlay as={Link} to={`blog/${post.slug.current}`}>
                        {post.title}
                    </LinkOverlay>
                </Heading>
                <Text color="gray.600">{dateToDisplayString(publishDate)}</Text>
                <Text m="4">{post.description}</Text>
            </Box>
        </LinkBox>
    )
}

export default PostCard