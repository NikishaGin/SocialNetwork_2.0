import React from 'react';
import './index.css';
import {store} from "./Components/state/state";
import {rerenderEntireTree} from "./Components/render/render";


rerenderEntireTree()

store.subscribe(rerenderEntireTree)
