import { Heading, Stack } from '@chakra-ui/react'
import AnimatedPage from '../components/AnimatedPage'
import Clock from '../components/clock/Clock'
import type { NextPageWithColor } from './_app'

const Home: NextPageWithColor = () => {
  return (
    <AnimatedPage>
      <Stack align="center" w="100%" m={"auto"}>
        <Heading mb={12} size="2xl">
          Welcome
        </Heading>
        <Clock fontWeight={"black"} color={"accent_pink.100"} fontSize="8xl" />
      </Stack>
    </AnimatedPage>
  )
}

Home.getBackgroundColor = () => "var(--chakra-colors-accent_yellow-100)"

export default Home
