import { Stack, Heading } from "@chakra-ui/react";
import Clock from "components/clock/Clock";

export default function Index() {
 return (
      <Stack align="center" w="100%" m={"auto"}>
        <Heading mb={12} size="2xl">
          Welcome
        </Heading>
        <Clock fontWeight={"black"} color={"accent_pink.100"} fontSize="8xl" />
      </Stack>
  ) 
}