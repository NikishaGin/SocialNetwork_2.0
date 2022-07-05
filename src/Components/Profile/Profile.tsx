import React from "react";
import {MyPosts} from "./My Posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, messageType, store} from "../state/state";

type PostsType = {
    id: number
    message: string
    likesCount: number

}

type PropsPostsType = {
    profilePage: PostsType []
    dispatch:(action: ActionsType)=>void
    newPostText: string
    /*updateNewPostText:(newText: string)=>void*/
}

export const Profile = (props: PropsPostsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage}
                     dispatch={props.dispatch}
                     newPostText={props.newPostText}
                     /*updateNewPostText={props.updateNewPostText}*//>
        </div>
    )
}