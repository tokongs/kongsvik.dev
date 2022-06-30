import { Center, Heading, Text, Wrap } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next'
import { groq } from 'next-sanity';
import AnimatedPage from '../components/AnimatedPage';
import PostCard from '../components/PostCard';
import { sanityClient } from '../lib/sanity';
import Post from '../models/post';

interface Props {
  posts: Post[]
}

const query = groq`*[_type == "post"]`

const Blog: NextPage<Props> = ({ posts }: Props) => {
  return (
    <AnimatedPage>
      <Center m={4}>
        <Wrap>
          {posts.map((value: Post) => <PostCard key={value.slug} post={value} />)}
        </Wrap>
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