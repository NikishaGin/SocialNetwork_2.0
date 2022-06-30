import React from "react";
import m from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={"https://avatars.mds.yandex.net/i?id=8edf218ad18d46efe219b1705da36a36-4076180-images-thumbs&n=13"}/>
            </div>
            <div className={m.description}>
                Ava
            </div>
        </div>
    )
}