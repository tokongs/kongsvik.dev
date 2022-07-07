import { Image } from "@chakra-ui/react"
import { getImageDimensions } from "@sanity/asset-utils"
import { useSanityChakraImageProps } from "~/sanity"

const PortableImage = ({ value, isInline }) => {
    const { width, height } = getImageDimensions(value)
    const imgProps = useSanityChakraImageProps(value)
    return <Image
        {...imgProps}
        alt={value.alt || ""}
        style={{
            display: isInline ? 'inline-block' : 'block',
            aspectRatio:  width / height,
        }}
    />
}