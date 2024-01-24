"use client"

import { addUser } from "@/lib/action"
import styles from "./adminUserForm.module.css"
import React from 'react'
import { useFormState } from "react-dom"

const AdminUserForm = () => {

  const [state, formAction] = useFormState(addUser, undefined)
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="text" name="username" placeholder="username"></input>
      <input type="text" name="email" placeholder="email"></input>
      <input type="password" name="password" placeholder="password"></input>
      <select name="isAdmin" id="">
        <option value="false">Is Admin?</option>
        <option value="false">Yes</option>
        <option value="true">No</option>
      </select>
      <button>Add</button>
      {state && state.error}
    </form>
  )
}

export default AdminUserForm
