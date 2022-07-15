import { Heading, Image, LinkBox, LinkOverlay, Text } from "@chakra-ui/react"
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
        <LinkBox as="article" w={{ base: "2xs", sm: "xs", md: "md" }} h={{ base: "2xs", sm: "xs", md: "md" }} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image {...imgProps} w="100%" h="50%" borderTopRadius="lg" />
            <Heading mt="2" textAlign="center" as="h2" size="lg">
                <LinkOverlay as={Link} to={`blog/${post.slug.current}`}>
                    {post.title}
                </LinkOverlay>
            </Heading>
            <Text color="gray.600" textAlign="center" m="auto">{dateToDisplayString(publishDate)}</Text>
            <Text m="4" textAlign="center" noOfLines={5}>{post.description}</Text>
        </LinkBox>
    )
}

export default PostCard