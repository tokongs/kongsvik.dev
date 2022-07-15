import sanityClient from "@sanity/client";
import createImageUrlBuider from "@sanity/image-url"
import { SanityImage } from "../models/post.server";
import config from "./sanity.conf"

interface ImageArgs {
    src: string | SanityImage
    width?: number
    height?: number
}

export const useSanityChakraImageProps = (img: ImageArgs) => {
    let builder = createImageUrlBuider(config).image(img.src).auto("format");

    if (img.height) {
        builder = builder.height(img.height)
    }
    if (img.width) {
        builder = builder.width(img.width)
    }
    const fallbackSrc = builder.quality(5).url()
    const alt = typeof(img.src) != "string" ? img.src.alt : undefined

    const src = builder.url()
    return {
        alt,
        src,
        fallbackSrc
    }
}

export const imageUrlBuilderFor = (src: string | SanityImage) => createImageUrlBuider(config).image(src)

const client = sanityClient(config)
export default client