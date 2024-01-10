import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h2>Page does not exist</h2>
      <Link href="/">Back to home</Link>
    </div>
  )
}

export default NotFound
