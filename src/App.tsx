import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route,} from "react-router-dom";
import {store} from "./Components/state/state";

function App() {
    let dialogs = store._state.dialogsPage.dialogs
    let message = store._state.dialogsPage.message
    let profilePage = store._state.profilePage.posts
    let newPostText = store._state.profilePage.newPostText

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-content'>
                    <Route path={"/dialogs"} render={() => <Dialogs dialogs={dialogs}
                                                                    message={message}/>}/>
                    <Route path={"/profile"} render={() => <Profile profilePage={profilePage}
                                                                    addPosts={store.addPosts.bind(store)}
                                                                    newPostText={newPostText}
                                                                    updateNewPostText={store.updateNewPostText.bind(store)}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
