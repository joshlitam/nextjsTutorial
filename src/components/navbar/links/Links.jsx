'use client'
import React, { useState } from 'react'
import styles from './links.module.css'
import NavLinks from './navLinks/navLinks'
import Image from 'next/image'
import { handleLogout } from '@/lib/action'
import { auth } from '@/lib/auth'

const links = [
    {
        title: "Homepage",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "Blog",
        path: "/blog"
    },

]

const Links = ({ session }) => {
    const [open, setOpen] = useState(false);


    // temporary
    const isAdmin = true

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map(link => (
                    <NavLinks item={link} key={link.title} />
                ))}
                {session ? (
                    <>
                        {session.user?.isAdmin && <NavLinks item={{ title: "Admin", path: "/admin" }} />}
                        <form action={handleLogout}>
                            <button className={styles.logout}>Logout</button>
                        </form>

                    </>
                ) : (
                    <NavLinks item={{ title: "Login", path: "/login" }} />
                )}

            </div>
            <Image src="/menu.png" alt="menu button" width={30} height={30} onClick={() => setOpen((prev) => !prev)} className={styles.menuButton} />
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map(link => (
                        <NavLinks item={link} key={link.title} />
                    ))}
                </div>
            )}

        </div>
    )
}

export default Links
