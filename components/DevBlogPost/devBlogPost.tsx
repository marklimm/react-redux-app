import React, { FunctionComponent } from 'react'
import Link from 'next/link'

import DisplayDate from 'components/DisplayDate/DisplayDate'
import { Post } from 'lib/types/Post'

interface DevBlogPostProps {
  devBlogPost: Post
}

export const DevBlogPost: FunctionComponent<DevBlogPostProps> = ({
  devBlogPost,
}: DevBlogPostProps) => {
  return (
    <div className='searchResultCard'>
      <h1 className='text-xl'>
        <Link href={`/devblog/${devBlogPost.id}`}>
          <a target='_blank'>{devBlogPost.title}</a>
        </Link>
      </h1>

      <div className='text-sm text-red-600'>
        <DisplayDate dateString={devBlogPost.date} />
      </div>

      <div className='markdownContent mt-1 text-gray-700'>
        <div dangerouslySetInnerHTML={{ __html: devBlogPost.contentHtml }} />
      </div>
    </div>
  )
}
