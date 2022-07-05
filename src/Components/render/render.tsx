import {stateType, store} from "../state/state";
import ReactDOM from "react-dom";
import App from "../../App";
import React from "react";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}