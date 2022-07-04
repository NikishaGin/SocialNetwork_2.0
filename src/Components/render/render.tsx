import {stateType} from "../state/state";
import ReactDOM from "react-dom";
import App from "../../App";
import React from "react";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}