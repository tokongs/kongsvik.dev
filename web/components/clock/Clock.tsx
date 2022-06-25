import { Box, Text, TextProps } from "@chakra-ui/react"
import { useEffect, useState } from "react";

const Clock = ({locale, ...props}: {locale?: string, props: TextProps}) => {
    const genTimeString = () => new Date().toLocaleTimeString([locale ?? "no"], { hour: '2-digit', minute: '2-digit' })
    const [timeString, setTimeString] = useState(genTimeString())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeString(genTimeString());
        }, 60 * 1000);
        return () => {
            clearInterval(timer);
        }
    }, [setTimeString])

    return <Text {...props}>{timeString}</Text>
}

export default Clock;