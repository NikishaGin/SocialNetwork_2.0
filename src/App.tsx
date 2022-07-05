import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route,} from "react-router-dom";
import {store, StoreType} from "./Components/state/state";


type PropsType = {
    store: StoreType
}


const App: React.FC<PropsType> = (props) => {
    /*const state = props.store.getState()*/

    let dialogs = props.store._state.dialogsPage.dialogs
    let message = props.store._state.dialogsPage.message
    let profilePage = props.store._state.profilePage.posts
    let newPostText = props.store._state.profilePage.newPostText

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-content'>
                    <Route path={"/dialogs"} render={() => <Dialogs dialogs={dialogs}
                                                                    message={message}/>}/>
                    <Route path={"/profile"} render={() => <Profile profilePage={profilePage}
                                                                    dispatch={props.store.dispatch.bind(props.store)}
                                                                    newPostText={newPostText}
                        /*updateNewPostText={store.updateNewPostText.bind(store)}*//>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
