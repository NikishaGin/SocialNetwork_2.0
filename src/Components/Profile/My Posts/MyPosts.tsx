import React, {ChangeEvent} from "react";
import m from './MyPosts.module.css';
import {Posts} from "./Post/Posts";
import {state, updateNewPostText} from "../../state/state";

type PostsType = {
    id: number
    message: string
    likesCount: number

}

type PropsPostsType = {
    profilePage: PostsType []
    addPosts: (postsText: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: PropsPostsType) => {

    let addPost = () => {
        props.addPosts(props.newPostText)
    }

    let onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(event.currentTarget.value)
    }

    return (
        <div className={m.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={m.posts}>
                {props.profilePage.map((el) => {
                    return (
                        <Posts id={el.id} message={el.message} likesCount={el.likesCount}/>
                    )
                })}
            </div>
        </div>
    )
}