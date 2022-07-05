import {postsType, stateType} from "./state";

export const profileReducer = (state: stateType, action:ActionsType) => {
    if (action.type === "ADD-POSTS") {
        const newPost: postsType = {
            id: new Date().getTime(),
            message: state.profilePage.newPostText,
            likesCount: 0
        }
        state.profilePage.posts.push(newPost)
        state.profilePage.newPostText = ''
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        state.profilePage.newPostText = action.newText
    }

    return state
}


type ActionAddPostsType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = (newPostText: string) => {
    return {
        type: "ADD-POSTS",
        newPost: newPostText
    } as const
}

type ActionUPDATENEWPOSTTEXTType = ReturnType<typeof UPDATENEWPOSTTEXTActionCreator>
export const UPDATENEWPOSTTEXTActionCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}


export type ActionsType = ActionAddPostsType | ActionUPDATENEWPOSTTEXTType