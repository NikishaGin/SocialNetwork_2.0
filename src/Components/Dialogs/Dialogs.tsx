import React from "react";
import m from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

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
                <DialogItem id={1} name={"Nikita"}/>
                <DialogItem id={2} name={"Anton"}/>
                <DialogItem id={3} name={"Sveta"}/>
                <DialogItem id={4} name={"Dima"}/>
                <DialogItem id={5} name={"Sasha"}/>
            </div>
            <div className={m.messages}>
                <Message message={"Hi"}/>
                <Message message={"How is your IT"}/>
                <Message message={"Yo"}/>
                <Message message={"Yo"}/>
                <Message message={"Yo"}/>
            </div>
        </div>

    )
}