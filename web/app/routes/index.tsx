import { Center, Wrap } from "@chakra-ui/react"
import { json, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react"
import PostCard from "app/components/PostCard"
import Post, { GetPosts } from "app/models/post.server";
import { CustomMetaFunction } from "../lib/meta";
import { HandleStructuredData } from "remix-utils"
import { WithContext, ItemList } from "schema-dts"

export const meta: MetaFunction = CustomMetaFunction(
    { title: "Blog", description: "Software development blog focusing on fun and interesting technologies." }
)

type LoaderData = {
    posts: Awaited<ReturnType<typeof GetPosts>>;
};

export const loader = async () => {
    return json<LoaderData>({
        posts: await GetPosts(),
    });
};

export default function Index() {
    const { posts } = useLoaderData<LoaderData>()
    return (
        <Center >
            <Wrap justify="center">
                {posts.map((value: Post) => <PostCard key={value.slug.current} post={value} />)}
            </Wrap>
        </Center>
    )
}

export const handle: HandleStructuredData<LoaderData> = {
    structuredData(data: LoaderData) {
        let { posts } = data;
        let postSchema: WithContext<ItemList> = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: posts.map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://kongsvik.dev/blog/${post.slug.current}`
            })),
        };

        return postSchema;
    }
};
