import React from "react";
import m from './Dialogs.module.css';
import {store} from "../state/state";
import {DialogItem} from "./Dialogitem/Dialogitem";
import {Message} from "./Message/Message";

type MessageType = {
    message: string
}

type DialogsType = {
    id: number
    name: string
}

type PropsDialogsType = {
    dialogs: DialogsType []
    message: MessageType []
}


export const  Dialogs = (props:PropsDialogsType) => {
    return (
        <div className={m.dialogs}>
            <div className={m.dialogsItems}>
                {props.dialogs.map((el) => {
                    return (
                        <DialogItem id={el.id} name={el.name}/>
                    )
                })}
            </div>
            <div className={m.messages}>
                {props.message.map((el) => {
                    return (
                        <Message message={el.message}/>
                    )
                })}
            </div>
        </div>

    )
}