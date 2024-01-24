import { getUsers } from "@/lib/data"
import styles from "./adminUsers.module.css"
import React from 'react'
import Image from "next/image";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () => {

  const users = await getUsers();
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <h1>Users</h1>
        {users.map(user => (
          <div className={styles.user} key={user.id}>
            <div className={styles.detail}>
              <Image src={user.img || "/noAvatar.png"} alt={user.title} width={50} height={50} />
              <span className={styles.userTitle}>{user.username}</span>
            </div>
            <form action={deleteUser}>
              <input type="hidden" name="id" value={user.id}></input>
              <button className={styles.userButton}>Delete</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminUsers
