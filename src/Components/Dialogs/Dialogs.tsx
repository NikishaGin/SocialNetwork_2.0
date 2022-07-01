import React from "react";
import m from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {state} from "../state/state";


type dialogItem = {
    id: number
    name: string
}
const DialogItem = (props: dialogItem) => {
    return (
        <div className={m.dialogs + " " + m.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

type messageType = {
    message: string
}
const Message = (props: messageType) => {
    return (
        <div className={m.dialog}>
            {props.message}
        </div>
    )
}


export const Dialogs = () => {
    return (
        <div className={m.dialogs}>
            <div className={m.dialogsItems}>
                {state.dialogsPage.dialogs.map((el) => {
                    return (
                        <DialogItem id={el.id} name={el.name}/>
                    )
                })}
            </div>
            <div className={m.messages}>
                {state.dialogsPage.message.map((el) => {
                    return (
                        <Message message={el.message}/>
                    )
                })}
            </div>
        </div>

    )
}