import { Link, Text, Box, Heading } from "@chakra-ui/react";

export default function Index() {
return (
      <Box maxW="2xl" m="auto">
        <Heading as="h1" size="xl" mb={4}>About the website</Heading>
        <Text>This is a website based on Remix serving content from a headless CMS called Sanity. 
          It is hosted on Vercel and the code can be found in 
          <Link color="accent_pink.100" target="_blank" href="https://github.com/tokongs/kongsvik.dev" isExternal> this Github repository</Link>.
        </Text>
      </Box>
  )
}