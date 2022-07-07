import { Center, Image, Heading, Stack } from "@chakra-ui/react";
import { PortableText } from "@portabletext/react";
import { json, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { CustomMetaFunction } from "~/meta";
import { GetPost } from "~/post.server";
import { useSanityChakraImageProps } from "~/sanity";

export const meta: MetaFunction = CustomMetaFunction<LoaderData>({
    title: ({ data }) => data.post.title,
    description: ({data}) => data.post.title
})

type LoaderData = {
    post: Awaited<ReturnType<typeof GetPost>>;
};

export const loader = async ({ params }: any) => {
    invariant(params.slug, "Expected params.slug")
    return json<LoaderData>({
        post: await GetPost(params.slug),
    });
};

export default function Post() {
    const { post } = useLoaderData<LoaderData>()
    const imgProps = useSanityChakraImageProps({ src: post.mainImage, width: 800, height: 400 })
    return (
        <Center>
            <Stack w="2xl">
                <Heading mb={8}>{post.title}</Heading>
                <Image pb={8} {...imgProps} w="100%" h="50%" />
                <PortableText
                    value={post.body}
                />
            </Stack>
        </Center>
    )
}