import React from "react";
import m from './MyPosts.module.css';
import {Posts} from "./Post/Posts";

export const MyPosts = () => {
    return (
        <div> My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={m.posts}>
                <Posts message={"Hi how are you?"}/>
                <Posts message={"It s my first post"}/>
            </div>
        </div>
    )
}