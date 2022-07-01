import { createCurrentUserHook, createClient } from "next-sanity";
import createImageUrlBuider from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import config from "./sanity.conf"

interface ImageArgs {
    src: SanityImageSource
    width?: number
    height?: number
}
interface ImageProps {
    src: string
    blurDataURL: string
    placeholder: "blur"
}

export const useNextSanityImage = (args: ImageArgs): ImageProps => {

    let builder = createImageUrlBuider(config).image(args.src)
    const blurDataURL = builder.width(100).blur(50).url()

    if (args.width) builder = builder.width(args.width)
    if (args.height) builder = builder.height(args.height)
    const src = builder.url()
    return {
        src,
        blurDataURL,
        placeholder: "blur"
    }
}
export const useCurrentUser = createCurrentUserHook(config)
export const sanityClient = createClient(config)