import sanityClient from "lib/sanity"
import Author from "./author"
import Category from "./category"

interface Post {
    title: string
    slug: string
    author: Author
    mainImage: string
    categories: Category[]
    publishedAt: Date
    body: any[]
}

const query = `*[_type == "post"]`
export async function GetPosts(): Promise<Post[]> {
    return sanityClient.fetch(query)
};

export default Post