import React from "react";
import {MyPosts} from "./My Posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPosts, updateNewPostText} from "../state/state";

type PostsType = {
    id: number
    message: string
    likesCount: number

}

type PropsPostsType = {
    profilePage: PostsType []
    addPosts:(postsText: string)=>void
    newPostText: string
    updateNewPostText:(newText: string)=>void
}

export const Profile = (props: PropsPostsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage}
                     addPosts={props.addPosts}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}