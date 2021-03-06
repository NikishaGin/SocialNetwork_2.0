import React from "react";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

export type messageType = {
    id: number
    message: string
}

type dialogsType = {
    id: number
    name: string
}

type dialogsPageType = {
    dialogs: dialogsType[]
    message: messageType[]
    newMessageBody: string
}

export type postsType = {
    id: number
    message: string
    likesCount: number
}

type post = {
    posts: postsType []
    newPostText: string
}

export type stateType = {
    profilePage: post
    dialogsPage: dialogsPageType
    sidebar: object
}


type ActionAddPostsType = ReturnType<typeof addPostActionCreator>
type ActionUPDATENEWPOSTTEXTType = ReturnType<typeof UPDATENEWPOSTTEXTActionCreator>
type ActionUPDATENEWMESSAGEType = ReturnType<typeof UPDATE_NEW_MESSAGE_BODY>
type ActionSENDMESSAGEType = ReturnType<typeof SEND_MESSAGE>



export type ActionsType = ActionAddPostsType | ActionUPDATENEWPOSTTEXTType | ActionUPDATENEWMESSAGEType | ActionSENDMESSAGEType

export type StoreType = {
    _state: stateType
    getState: () => void
    _callSubscriber: () => void
    addPosts: (postsText: string) => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

export const addPostActionCreator = (newPostText: string) => {
    return {
        type: "ADD-POSTS",
        newPost: newPostText
    } as const
}


export const UPDATENEWPOSTTEXTActionCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}


export const UPDATE_NEW_MESSAGE_BODY = (body: string) => {
    return {
        type: "UPDATE_NEW_MESSAGE_BODY",
        body: body
    } as const
}

export const SEND_MESSAGE = () => {
    return {
        type: "SEND_MESSAGE",
    } as const
}


export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi how are you?", likesCount: 12},
                {id: 2, message: "It s my first post", likesCount: 13},
            ],
            newPostText: 'IT'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Nikita"},
                {id: 2, name: "Anton"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Dima"},
                {id: 5, name: "Sasha"},
            ],
            message: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your IT"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"},
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('Hello')
    },
    addPosts(postsText: string) {
        const newPost: postsType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''

        this._callSubscriber()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === "ADD-POSTS") {
            const newPost: postsType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === "UPDATE_NEW_MESSAGE_BODY") {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber()
        } else if (action.type === "SEND_MESSAGE") {
            const body: messageType = {
                id: new Date().getTime(),
                message: this._state.dialogsPage.newMessageBody,
            }
            this._state.dialogsPage.message.push(body)
            this._state.dialogsPage.newMessageBody = ""
            this._callSubscriber()
        }
    }
}














