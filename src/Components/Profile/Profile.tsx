import React from "react";
import {MyPosts} from "./My Posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPosts} from "../state/state";

type PostsType = {
    id: number
    message: string
    likesCount: number


}

type PropsPostsType = {
    posts: PostsType []
    addPosts:(postsText: string)=>void
}

export const Profile = (props: PropsPostsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} addPosts={props.addPosts} />
        </div>
    )
}