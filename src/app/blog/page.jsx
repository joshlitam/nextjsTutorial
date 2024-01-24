import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/components/postcard/PostCard'
import { getPosts } from '@/lib/data'

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});

  if (!res.ok) {
    throw new Error("something went wrong");
  }

  return res.json();
}

export const metadata = {
  title: 'Blog Page',
  description: 'Next.js 14 app blog page',
}

const BlogPage = async () => {
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map(post => (
        <div className={styles.post}>
          <PostCard post={post} key={post.id} />
        </div>
      ))}

    </div>
  )
}

export default BlogPage
