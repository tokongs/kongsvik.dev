import { Box, Text, TextProps } from "@chakra-ui/react"
import { useEffect, useState } from "react";

const genTimeString = (locale?: string) => new Date().toLocaleTimeString([locale ?? "no"], { hour: '2-digit', minute: '2-digit' })
const Clock = ({ locale, ...props }: { locale?: string} & TextProps) => {
    const [timeString, setTimeString] = useState(genTimeString(locale))

    useEffect(() => {
        const start = new Date()
        let timer: NodeJS.Timer | null = null;

        setTimeString(genTimeString(locale));
        setTimeout(() => {
            setTimeString(genTimeString(locale));
            timer = setInterval(() => {
                setTimeString(genTimeString(locale));
            }, 60 * 1000);
        }, (60 - start.getSeconds()) * 1000)

        return () => {
            if (timer != null)
                clearInterval(timer);
        }
    }, [setTimeString, locale])

    return <Text {...props}>{timeString}</Text>
}

export default Clock;