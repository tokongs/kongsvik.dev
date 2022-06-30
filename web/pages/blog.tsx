import { Center, Heading, Text } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next'
import { groq } from 'next-sanity';
import AnimatedPage from '../components/AnimatedPage';
import { sanityClient } from '../lib/sanity';
import Post from '../models/post';

interface Props {
  posts: Post[]
}

const query = groq`*[_type == "post"]`

const Blog: NextPage<Props> = ({ posts }: Props) => {
  console.log(posts)
  return (
    <AnimatedPage>
      <Center mt={4}>
        {posts.map((value: Post) => <Heading key={value.slug} as="h1" size="2xl">{value.title}</Heading>)}
      </Center>
    </AnimatedPage>
  )

}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts,
    }
  }
}

export default Blog;