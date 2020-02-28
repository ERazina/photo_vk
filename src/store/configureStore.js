import { createStore, applyMiddleware } from 'redux';
import {rootReducer} from "./../reducers/rootReducer";
import {ping} from "./enhancers/ping";

export const store = createStore(rootReducer, applyMiddleware(ping));