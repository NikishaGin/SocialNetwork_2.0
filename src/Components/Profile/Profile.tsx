import React from "react";
import m from './Profile.module.css';
import {MyPosts} from "./My Posts/MyPosts";

export const Profile = () => {
    return (
        <div className={m.content}>
            <div>
                <img
                    src={"https://avatars.mds.yandex.net/i?id=8edf218ad18d46efe219b1705da36a36-4076180-images-thumbs&n=13"}/>
            </div>
            <div>
                Ava
            </div>
            <MyPosts />
        </div>
    )
}