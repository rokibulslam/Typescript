/*
* class => Element
* form = HTMLFormElement
*/
// const form = document.querySelector("form")!;
const userForm = document.querySelector("form") as HTMLFormElement;
const userName = document.querySelector("#name") as HTMLInputElement;
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        userName: userName.value
    }
    console.log(data);
})

