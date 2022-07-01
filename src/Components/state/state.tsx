import React from "react";

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
}

type stateType = {
    profilePage: post
    dialogsPage: dialogsPageType
}


export let state: stateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi how are you?", likesCount: 12},
            {id: 2, message: "It s my first post", likesCount: 13},
        ]
    },
    dialogsPage : {
        dialogs: [
            {id:1,name:"Nikita"},
            {id:2,name:"Anton"},
            {id:3,name:"Sveta"},
            {id:4,name:"Dima"},
            {id:5,name:"Sasha"},
        ],
        message: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your IT"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"},
        ]
    },
}




