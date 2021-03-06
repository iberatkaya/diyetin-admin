import { createStore, combineReducers } from 'redux';
import { User } from './Actions';
import firebase from 'firebase';
import {firebaseid}  from '../appid';

interface ActionUser {
    payload: User;
    type: string;
}

firebase.initializeApp(firebaseid);

let firebaseuserfunc = () => {
    if (localStorage.getItem('firebaseuser') !== '' && localStorage.getItem('firebaseuser') !== null)
        return JSON.parse(localStorage.getItem('firebaseuser')!) as firebase.User;
    else return '';
};

let INITIAL_STATE = {
    username: localStorage.getItem('username') ? localStorage.getItem('username') : '',
    firebaseuser: firebaseuserfunc(),
};

let user = (state = INITIAL_STATE, action: ActionUser) => {
    switch (action.type) {
        case 'LOGIN':
            return (state = action.payload);
        default:
            return state;
    }
};

export const store = createStore(combineReducers({ user }));
