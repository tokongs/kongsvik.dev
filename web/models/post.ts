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

export default Post