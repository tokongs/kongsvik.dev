import { Center, Wrap } from "@chakra-ui/react"
import { json, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react"
import PostCard from "components/PostCard"
import Post, { GetPosts } from "models/post.server";
import { CustomMetaFunction } from "~/meta";


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