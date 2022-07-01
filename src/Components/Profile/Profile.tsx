import React from "react";
import {MyPosts} from "./My Posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type PostsType = {
    id: number
    message: string
    likesCount: number

}

type PropsPostsType = {
    posts: PostsType []
}

export const Profile = (props: PropsPostsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    )
}