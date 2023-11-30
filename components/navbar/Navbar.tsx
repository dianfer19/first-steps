import React from 'react';
import Link from "next/link";
import {HomeIcon} from "@primer/octicons-react";
import {ActiveLink} from "@/components/active-link/Active-link";

const navItems = [
    {path: '/about', text: 'About'},
    {path: '/pricing', text: 'Pricing'},
    {path: '/contact', text: 'Contact'},
]
export const Navbar = () => {
    console.log("Server Component Navbar")
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link className={"flex items-center"} href={"/"}>
            <HomeIcon className={"mr-2"}></HomeIcon>
                Home
            </Link>
            <div className="flex-1">

            </div>
            {navItems.map((navItem) => (
                <ActiveLink key={navItem.path} {... navItem}/>
            ))}
        </nav>
    );
};
