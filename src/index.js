import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



const clockContainer = document.querySelector(".js-clock");
const clockTitle = document.querySelector("h1");
const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");


function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function handleSubmit(e) {
  e.preventDefault();
  form.classList.add("form");
  const userName = input.value;
  localStorage.setItem("userName", userName);
  paintGreeting(userName);
}

function askForName() {
  form.classList.add("showing");
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  greeting.classList.add("showing");
  greeting.innerText = `Hello ${text}`;
  form.classList.add("form");
}

function loadName() {
  const currentUser = localStorage.getItem("userName");
  if(currentUser == null) {
    askForName();
  }
  else {
    paintGreeting(currentUser);
  }
}

function init(){
  getTime();
  loadName();
  setInterval(getTime, 1000);
}

init();