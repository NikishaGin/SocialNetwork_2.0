import React from "react";
import m from './MyPosts.module.css';
import {Posts} from "./Post/Posts";
import {state} from "../../state/state";

type PostsType = {
    id: number
    message: string
    likesCount: number
}

type PropsPostsType = {
    posts: PostsType []
}

export const MyPosts = (props:PropsPostsType) => {
    return (
        <div className={m.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={m.posts}>
                {props.posts.map((el) => {
                    return (
                        <Posts id={el.id} message={el.message} likesCount={el.likesCount}/>
                    )
                })}
            </div>
        </div>
    )
}