import React from "react";
import m from './NavBar.module.css';
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={m.nav}>
            <div className={m.item}><NavLink to={"/profile"}>Profile</NavLink></div>
            <div className={m.item}><NavLink to={"/dialogs"}>Message</NavLink></div>
            <div className={m.item}><a href={"/News"}>News</a></div>
            <div className={m.item}><a href={"/Music"}>Music</a></div>
            <div className={m.item}><a href={"/Settings"}>Settings</a></div>
        </nav>
    )
}