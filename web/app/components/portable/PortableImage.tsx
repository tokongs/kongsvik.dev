import { Image } from "@chakra-ui/react"
import { PortableTextTypeComponentProps } from "@portabletext/react"
import { getImageDimensions } from "@sanity/asset-utils"
import { useSanityChakraImageProps } from "app/lib/sanity"

const PortableImage = ({ value, isInline }: PortableTextTypeComponentProps<any>) => {
    const { width, height } = getImageDimensions(value)
    const imgProps = useSanityChakraImageProps({src: value})
    return <Image
        {...imgProps}
        alt={value.alt || ""}
        style={{
            display: isInline ? 'inline-block' : 'block',
            aspectRatio:  (width / height) as any,
        }}
    />
}

export default PortableImage