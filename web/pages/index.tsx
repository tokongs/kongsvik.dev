import { Box, Heading, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Clock from '../components/clock/Clock'

const Home: NextPage = () => {
  return (
    <Stack align="center">
      <Heading mb={12} size="2xl">
        Welcome
      </Heading>
      <Clock color="accent_green.100" fontSize="8xl"/>
    </Stack>
  )
}

export default Home
