'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './navLinks.module.css'

const NavLinks = ({ item }) => {

    const pathName = usePathname();

    return (
        <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>
            {item.title}
        </Link>

    )
}

export default NavLinks
