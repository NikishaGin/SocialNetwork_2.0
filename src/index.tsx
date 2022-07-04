import React from 'react';
import './index.css';
import {state, stateType, subscribe} from "./Components/state/state";
import {rerenderEntireTree} from "./Components/render/render";

subscribe(rerenderEntireTree)

rerenderEntireTree()
