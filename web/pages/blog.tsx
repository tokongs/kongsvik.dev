import { Center, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next'
import AnimatedPage from '../components/AnimatedPage';

const Blog: NextPage = () => {
  return (
    <AnimatedPage>
      <Center mt={4}>
        <Heading as="h1" size="2xl">Hello</Heading>
      </Center>
    </AnimatedPage>
  )

}

export default Blog;