import React from "react";
import m from './NavBar.module.css';

export const NavBar = () => {
    return (
        <nav className={m.nav}>
            <div className={m.item}><a>Profile</a></div>
            <div className={m.item}><a>Message</a></div>
            <div className={m.item}><a>News</a></div>
            <div className={m.item}><a>Music</a></div>
            <div className={m.item}><a>Settings</a></div>
        </nav>
    )
}