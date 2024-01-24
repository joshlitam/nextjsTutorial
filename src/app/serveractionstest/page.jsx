import React from 'react'
import { addPost, deletePost } from '@/lib/action'

const page = () => {
    return (
        <div>
            <form action={addPost}>
                <input type="text" placeholder='title' name='title' />
                <input type="text" placeholder='desc' name='desc' />
                <input type="text" placeholder='slug' name='slug' />
                <input type="text" placeholder='userId' name='userId' />
                <button type='submit'>submit</button>
            </form>

            <form action={deletePost}>
                <input type="text" placeholder='post id' name='id'/>
                <button>delete</button>
            </form>
            
        </div>
    )
}

export default page