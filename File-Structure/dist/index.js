"use strict";
/*
* class => Element
* form = HTMLFormElement
*/
// const form = document.querySelector("form")!;
const userForm = document.querySelector("form");
const userName = document.querySelector("#name");
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        userName: userName.value
    };
    console.log(data);
});
