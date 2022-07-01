import React from "react";
import m from './Dialogs.module.css';
import {state} from "../state/state";
import {DialogItem} from "./Dialogitem/Dialogitem";
import {Message} from "./Message/Message";




export const  Dialogs = () => {
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