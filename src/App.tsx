import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, } from "react-router-dom";
import {addPosts, state} from "./Components/state/state";

function App() {
    let dialogs = state.dialogsPage.dialogs
    let message = state.dialogsPage.message
    let posts = state.profilePage.posts

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-content'>
                    <Route path={"/dialogs"} render={() => <Dialogs dialogs={dialogs} message={message}/>}/>
                    <Route path={"/profile"} render={() => <Profile posts={posts} addPosts={addPosts} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
