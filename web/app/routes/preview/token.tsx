import { Box, Button, Center, Flex, Input, Text } from "@chakra-ui/react";
import { ActionFunction, DataFunctionArgs, json, LoaderFunction, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { sanityPreviewToken } from "~/cookies";

type LoaderData = {
  token: string;
};

export const loader: LoaderFunction = async ({ request }: DataFunctionArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await sanityPreviewToken.parse(cookieHeader)) || {};
  return json<LoaderData>({ token: cookie.token });
}

export const action: ActionFunction = async ({ request, params }: DataFunctionArgs) => {
  if (request.method != "POST") {
    return json({ "result": "error" }, 405)
  }
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await sanityPreviewToken.parse(cookieHeader)) || {};
  const bodyParams = await request.formData();

  cookie.token = bodyParams.get("token")

  return json({"result": "success"}, {
    headers: {
      "Set-Cookie": await sanityPreviewToken.serialize(cookie),
    },
  });
}

const Token = () => {
  const { token } = useLoaderData<LoaderData>()

  return (
    <Center>
      <Flex direction="column">
        <Box>
          <Text>Current token is: {token}</Text>
        </Box>
        <Box>
          <Form method="post" reloadDocument>
            <Input placeholder='Set new token' name="token" />
            <Button type="submit" variant='outline'>
              Submit
            </Button>
          </Form>
        </Box>
      </Flex>
    </Center>
  )
}

export default Token