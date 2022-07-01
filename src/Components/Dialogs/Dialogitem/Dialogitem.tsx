import m from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type dialogItem = {
    id: number
    name: string
}
export const DialogItem = (props: dialogItem) => {
    return (
        <div className={m.dialogs + " " + m.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}