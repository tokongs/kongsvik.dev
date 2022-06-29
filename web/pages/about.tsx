import { Center, Heading } from '@chakra-ui/react';
import AnimatedPage from '../components/AnimatedPage';
import type { NextPageWithColor } from './_app';

const About: NextPageWithColor = () => {
  return (
    <AnimatedPage>
      <Center mt={4}>
        <Heading as="h1" size="2xl">Hello, I&apos;m Tobias</Heading>
      </Center>
    </AnimatedPage>
  )
}

About.getBackgroundColor = () => "var(--chakra-colors-accent_green-100)"

export default About;