import React from "react";
import m from './MyPosts.module.css';
import {Posts} from "./Post/Posts";

export const MyPosts = () => {
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
                <Posts message={"Hi how are you?"}/>
                <Posts message={"It s my first post"}/>
            </div>
        </div>
    )
}