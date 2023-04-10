const cuadro = document.querySelector(".cuadro");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");




registerLink.addEventListener("click", ()=> {
    cuadro.classList.add("active");
});


loginLink.addEventListener("click", ()=> {
    cuadro.classList.remove("active");
})

btnPopup.addEventListener("click", ()=> {
    cuadro.classList.add("active-popup");
});

iconClose.addEventListener("click", ()=> {
    cuadro.classList.remove("active-popup");
});

