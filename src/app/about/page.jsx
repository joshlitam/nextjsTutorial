import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'

export const metadata = {
  title: 'About Page',
  description: 'Next.js 14 about page',
}

const AboutPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Agency</h2>
          <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver.</h1>
          <p className={styles.desc}>Lorem ipsum dolor fsafasfas fasfasfas asfasfas</p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 k+</h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 k+</h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 k+</h1>
              <p>Years of experience</p>
            </div>
          </div>

        </div>
        <div className={styles.imgContainer}>
          <Image src="/about.png" alt="About image" fill className={styles.img} />
        </div>

      </div>
    </div>
  )
}

export default AboutPage
