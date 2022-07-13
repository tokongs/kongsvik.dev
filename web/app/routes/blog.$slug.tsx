import { Center, Text, Image, Heading, Stack, Box } from "@chakra-ui/react";
import { json, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import PortableText from "components/portable/PortableText";
import invariant from "tiny-invariant";
import { CustomMetaFunction } from "~/meta";
import { GetPost } from "~/post.server";
import { imageUrlBuilderFor, useSanityChakraImageProps } from "~/sanity";
import { HandleStructuredData } from "remix-utils"
import { WithContext, BlogPosting } from "schema-dts"

export const meta: MetaFunction = CustomMetaFunction<LoaderData>({
    title: ({ data }) => data.post.title,
    description: ({ data }) => data.post.description,
    imageSrc: ({ data }) => data.post.mainImage,
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
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export default function Post() {
    const { post } = useLoaderData<LoaderData>()
    const imgProps = useSanityChakraImageProps({ src: post.mainImage, width: 800, height: 400 })
    const publishDate = new Date(post.publishedAt)
    return (
        <Center>
            <Stack maxW="4xl" m="8">
                <Box mb={6}>
                    <Heading as="h1" size="4xl" mb={2}>{post.title}</Heading>
                    <Text>Published {monthNames[publishDate.getMonth()]} {publishDate.getDate()}, {publishDate.getFullYear()}</Text>
                </Box>
                <Image pb={8} {...imgProps} w="100%" h="50%" />
                <PortableText
                    value={post.body}
                />
            </Stack>
        </Center>
    )
}

export const handle: HandleStructuredData<LoaderData> = {
    structuredData(data: LoaderData) {
        let { post } = data;
        let postSchema: WithContext<BlogPosting> = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            datePublished: post.publishedAt,
            dateModified: post._updatedAt,
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://kongsvik.dev/blog/${post.slug.current}`,
            },
            headline: post.title,
            description: post.description,
            image: imageUrlBuilderFor(post.mainImage).url(),
            author: {
                "@type": "Person",
                name: "Tobias Slettemoen Kongsvik",
                url: "https://kongsvik.dev/about"
            },
        };

        return postSchema;
    }
};