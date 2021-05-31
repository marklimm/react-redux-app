import React, { FunctionComponent } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { Post } from 'lib/types/Post'
import { getSortedMarkdownFiles } from 'lib/markdownParser'

import { DevBlogPost } from 'components/DevBlogPost/devBlogPost'

interface DevBlogProps {
  devBlogPosts: Post[]
}

const DevBlog: FunctionComponent<DevBlogProps> = ({
  devBlogPosts,
}: DevBlogProps) => {
  return (
    <>
      <Head>
        <title>Developer blog</title>
        <meta
          name='description'
          content='Markdown files being output to HTML.  A log of updates made to my NextJS app'
        ></meta>
      </Head>

      <div className='grid grid-cols-3 gap-4 items-start'>
        <div className='col-span-2'>
          <h1>Developer Blog</h1>

          {devBlogPosts.length > 0 &&
            devBlogPosts.map((post) => (
              <div key={post.id} className='mb-8'>
                <DevBlogPost devBlogPost={post} />
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const devBlogPosts = await getSortedMarkdownFiles('data/devblog')
  const lastTwentyPosts = devBlogPosts.slice(0, 20)

  return {
    props: {
      devBlogPosts: lastTwentyPosts,
    },
  }
}

export default DevBlog
