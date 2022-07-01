import React from "react";
import m from './Posts.module.css';

type PostsType = {
    id: number
    message: string
    likesCount: number
}


export const Posts = (props: PostsType) => {
    return (
        <div className={m.item}>
            <img src={"https://avatars.mds.yandex.net/i?id=626bfbfd1f3670d57b80070f74e723bd-4841129-images-thumbs&n=13"}
            />{props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}
