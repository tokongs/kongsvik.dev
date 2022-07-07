import sanityClient from "@sanity/client";
import createImageUrlBuider from "@sanity/image-url"
import config from "./sanity.conf"

interface ImageArgs {
    src: string
    width?: number
    height?: number
}

export const useSanityChakraImageProps = (img: ImageArgs) => {
   let builder = createImageUrlBuider(config).image(img.src).auto("format");

   const fallbackSrc = builder.width(100).blur(50).url()
   if (img.height) {
    builder = builder.height(img.height)
   }
   if (img.width) {
    builder = builder.width(img.width)
   }
   const src = builder.url()
    return {
        src,
        fallbackSrc
    }
}

const client = sanityClient(config)
export default client