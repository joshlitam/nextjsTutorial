import React, { Suspense } from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/PostUser'
import { getPost } from '@/lib/data'

// FETCH DATA WITH API
const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

    if (!res.ok) {
        throw new Error("failed to fetch post")
    }
    
    return res.json();
}

export const generateMetadata = async ({ params }) => {
    const { slug } = params;

    const post = await getData(slug);
    return {
        title: post.title,
        description: post.desc
    };
}

const page = async ({ params }) => {

    const { slug } = params;
    const post = await getPost(slug);
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                {post.img && <Image src={post.img} alt="Blog Image" fill className={styles.img} />}
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <PostUser id={post.userId} />
                    </Suspense>
                    <div className=
                        {styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>

                <div className={styles.content}>{post.desc}</div>
            </div>
        </div>
    )
}

export default page
