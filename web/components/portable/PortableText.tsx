import { PortableText } from "@portabletext/react"

interface Props {
    value: any 
}

const portableComponents = {
    types: {

    }
}

const ChakraPortableText = ({value}: Props) => {

    return <PortableText value={value} />
}

export default ChakraPortableText