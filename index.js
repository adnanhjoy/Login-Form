let form = document.querySelector("form");
let Email = form.querySelector("div #email");
let Password = form.querySelector("div #password");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let userInfo = {
        Email: Email.value,
        Password: Password.value,
    };
    console.log(userInfo);
    Email.value ="";
    Password.value = "";
});