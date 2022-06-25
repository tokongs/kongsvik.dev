import { Box, Text, TextProps } from "@chakra-ui/react"
import { useEffect, useState } from "react";

const Clock = ({ locale, ...props }: { locale?: string, props: TextProps }) => {
    const genTimeString = () => new Date().toLocaleTimeString([locale ?? "no"], { hour: '2-digit', minute: '2-digit' })
    const [timeString, setTimeString] = useState(genTimeString())

    useEffect(() => {
        const start = new Date()
        let timer: NodeJS.Timer | null = null;

        setTimeString(genTimeString());
        setTimeout(() => {
            setTimeString(genTimeString());
            timer = setInterval(() => {
                setTimeString(genTimeString());
            }, 60 * 1000);
        }, (60 - start.getSeconds()) * 1000)

        return () => {
            if (timer != null)
                clearInterval(timer);
        }
    }, [setTimeString])

    return <Text {...props}>{timeString}</Text>
}

export default Clock;