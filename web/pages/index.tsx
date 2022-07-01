import { Heading, Stack } from '@chakra-ui/react'
import { NextPage } from 'next'
import Clock from '../components/clock/Clock'

const Home: NextPage = () => {
  return (
      <Stack align="center" w="100%" m={"auto"}>
        <Heading mb={12} size="2xl">
          Welcome
        </Heading>
        <Clock fontWeight={"black"} color={"accent_pink.100"} fontSize="8xl" />
      </Stack>
  )
}

export default Home
