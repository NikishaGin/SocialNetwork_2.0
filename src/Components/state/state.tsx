import React from "react";

export let store = {
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
            ]
        }
    },
    getState(){
      return this._state
    },
    _callSubscriber() {
        console.log('Hello')
    },
    addPosts (postsText: string) {
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
    subscribe(observer:() => void){
        this._callSubscriber = observer
    },


}











/*let rerenderEntireTree = () => {
    console.log('Hello')
}*/

/*export const subscribe = (observer:() => void) => {
    rerenderEntireTree = observer
}*/


type messageType = {
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
}

type postsType = {
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
}


/*export let state: stateType = {
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
        ]
    }
}*/

/*export const addPosts = (postsText: string) => {
    const newPost: postsType = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''

    rerenderEntireTree()
}*/


/*export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}*/





