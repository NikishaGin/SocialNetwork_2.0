import React from "react";
import m from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


export const Dialogs = () => {
    return (
        <div className={m.dialogs}>
            <div className={m.dialogsItems}>
                <div className={m.dialog}>
                    <NavLink to={'/dialogs/1'}>Nikita</NavLink>
                </div>
                <div className={m.dialog}>
                    <NavLink to={'/dialogs/2'}>Anton</NavLink>
                </div>
                <div className={m.dialog}>
                    <NavLink to={'/dialogs/3'}>Sveta</NavLink>
                </div>
                <div className={m.dialog}>
                    <NavLink to={'/dialogs/4'}>Dima</NavLink>
                </div>
                <div className={m.dialog}>
                    <NavLink to={'/dialogs/5'}>Sasha</NavLink>
                </div>
            </div>
            <div className={m.messages}>
                <div className={m.dialog}>Hi</div>
                <div className={m.dialog}>How is your IT</div>
                <div className={m.dialog}>Yo</div>
            </div>
        </div>

    )
}