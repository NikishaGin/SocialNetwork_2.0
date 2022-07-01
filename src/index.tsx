import React from 'react';
import './index.css';
import {state, stateType} from "./Components/state/state";
import {rerenderEntireTree} from "./Components/render/render";



rerenderEntireTree(state)