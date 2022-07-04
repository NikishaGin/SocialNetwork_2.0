import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route,} from "react-router-dom";
import {addPosts, state, updateNewPostText} from "./Components/state/state";

function App() {
    let dialogs = state.dialogsPage.dialogs
    let message = state.dialogsPage.message
    let profilePage = state.profilePage.posts
    let newPostText = state.profilePage.newPostText

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-content'>
                    <Route path={"/dialogs"} render={() => <Dialogs dialogs={dialogs}
                                                                    message={message}/>}/>
                    <Route path={"/profile"} render={() => <Profile profilePage={profilePage}
                                                                    addPosts={addPosts}
                                                                    newPostText={newPostText}
                                                                    updateNewPostText={updateNewPostText}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
