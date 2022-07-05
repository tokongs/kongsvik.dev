import sanityClient from "@sanity/client";
import createImageUrlBuider from "@sanity/image-url"
import config from "./sanity.conf"

interface ImageArgs {
    src: string
    width?: number
    height?: number
}
interface ImageProps {
    src: string
    blurDataURL: string
    placeholder: "blur"
}


export const urlFor = (img: string) => {
    return createImageUrlBuider(config).image(img);
}

const client = sanityClient(config)
export default client