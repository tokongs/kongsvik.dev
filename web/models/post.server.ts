import groq from "groq"
import sanityClient from "lib/sanity"
import Author from "./author"
import Category from "./category"
import Slug from "./slug"

interface Post {
    title: string
    description: string,
    slug: Slug
    author: Author
    mainImage: string
    categories: Category[]
    publishedAt: string
    body: any[]
}

export async function GetPosts(): Promise<Post[]> {
    const query = groq`*[_type == "post"]`
    return sanityClient.fetch(query)
};
export async function GetPost(slug: string): Promise<Post> {
    const query = groq`*[_type == "post" && slug.current == "${slug}"][0]`
    return sanityClient.fetch(query)
}

export default Post