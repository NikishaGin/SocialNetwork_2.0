import m from "../Dialogs.module.css";
import React from "react";

type messageType = {
    message: string
}
export const Message = (props: messageType) => {
    return (
        <div className={m.dialog}>
            {props.message}
        </div>
    )
}