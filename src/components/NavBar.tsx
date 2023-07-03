"use client"
import { useSearchParams } from "next/navigation"
import Link from 'next/link'
import React from 'react'

const NavBar = () => {

    const params = useSearchParams();
    const todoFilter = params.get("todos");

    return (
        <nav>
            <Link href="/" className={todoFilter === null ? "active" : ""}>ALL</Link>
            <Link href="/?todos=active" className={todoFilter === "active" ? "active" : ""}>Acive</Link>
            <Link href="/?todos=completed" className={todoFilter === "completed" ? "active" : ""}>Completed</Link>
        </nav>
    )
}

export default NavBar