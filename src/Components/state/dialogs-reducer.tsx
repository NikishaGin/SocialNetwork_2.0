import {messageType, postsType, stateType} from "./state";


export const dialogsReducer = (state: stateType, action: ActionsTypeDialogs) => {

    if (action.type === "UPDATE_NEW_MESSAGE_BODY") {
        state.dialogsPage.newMessageBody = action.body
    } else if (action.type === "SEND_MESSAGE") {
        const body: messageType = {
            id: new Date().getTime(),
            message: state.dialogsPage.newMessageBody,
        }
        state.dialogsPage.message.push(body)
        state.dialogsPage.newMessageBody = ""
    }

    return state
}

type ActionUPDATENEWMESSAGEType = ReturnType<typeof UPDATE_NEW_MESSAGE_BODY>
export const UPDATE_NEW_MESSAGE_BODY = (body: string) => {
    return {
        type: "UPDATE_NEW_MESSAGE_BODY",
        body: body
    } as const
}

type ActionSENDMESSAGEType = ReturnType<typeof SEND_MESSAGE>
export const SEND_MESSAGE = () => {
    return {
        type: "SEND_MESSAGE",
    } as const
}

export type ActionsTypeDialogs = ActionUPDATENEWMESSAGEType | ActionSENDMESSAGEType