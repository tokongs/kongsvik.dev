import { Stack, Heading } from "@chakra-ui/react";
import { MetaFunction } from "@remix-run/node";
import Clock from "components/clock/Clock";
import { CustomMetaFunction } from "~/meta";

export const meta: MetaFunction = CustomMetaFunction({
  title: "Home", description: "Tobias Slettemoen Kongsvik's landing page and blog"
})

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