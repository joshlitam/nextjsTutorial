import LoginForm from "@/components/loginForm/LoginForm"
import { handleGithubLogin } from "@/lib/action"
import styles from "./Login.module.css"
import React from 'react'

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  )
}

export default page
