import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
function formatName(user) {
    return user.firstName + ' ' + user.lastName +' '+user.age;
}
function link(){
    return "https://www.naver.com";
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez',
    age:30,
};




const element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
        <a href={link()}>link</a>

    </div>
);

ReactDOM.render(
    element,

    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
