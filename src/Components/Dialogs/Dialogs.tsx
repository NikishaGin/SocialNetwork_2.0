import React, {ChangeEvent} from "react";
import m from './Dialogs.module.css';
import {ActionsType, addPostActionCreator, SEND_MESSAGE, store, UPDATE_NEW_MESSAGE_BODY} from "../state/state";
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
    newMessageBody: string
    dispatch: (action: ActionsType) => void
}


export const Dialogs = (props: PropsDialogsType) => {


    let newMessageBody = props.newMessageBody

    let onSendMessageClick = () => {
        props.dispatch(SEND_MESSAGE())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            let body = e.currentTarget.value
            props.dispatch(UPDATE_NEW_MESSAGE_BODY(body))
    }


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
                <div><textarea value={newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder={"Enter your message"}></textarea></div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>

    )
}