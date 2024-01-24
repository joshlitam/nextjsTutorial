import React from 'react'
import styles from './postUser.module.css'
import Image from 'next/image';
import { getUser } from '@/lib/data';

const PostUser = async ({ id }) => {
    const user = await getUser(id);

    return (
        <div className={styles.container}>
            {<Image src={user.img ? user.img : "/noavatar.png"} alt="avatar image" width={50} height={50} className={styles.avatar} />}
            <div className={styles.texts}>
                <span className={styles.title}>Author</span>
                <span className={styles.username}>{user.username}</span>
            </div>

        </div>
    )
}

export default PostUser
