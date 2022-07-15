import { Link, Text, Box, Heading, Center } from "@chakra-ui/react";
import { json, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { GetAbout } from "app/models/about.server";
import { CustomMetaFunction } from "../lib/meta";

import PortableText from "~/components/portable/PortableText";

export const meta: MetaFunction = CustomMetaFunction(
  { title: "About", description: "About me and the Kongsvik.dev blog" }
)

type LoaderData = {
  about: Awaited<ReturnType<typeof GetAbout>>;
};

export const loader = async () => {
  return json<LoaderData>({
    about: await GetAbout(),
  });
};

export default function Index() {
  const { about } = useLoaderData<LoaderData>()
  return (
    <Center m={8}>
      <Box maxW="2xl" >
        <PortableText value={about.body} />
      </Box>
    </Center>
  )
}