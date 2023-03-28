let abrirMenu = document.querySelector("#btnMovil");
let cerrarMenu = document.querySelector("#btnMovil_cerrar");
let menuMovil = document.querySelector(".menu__movil");

/*FUNCION MENU MOVIL*/

abrirMenu.addEventListener("click", () => {

    menuMovil.classList.remove("ocultar");
});

cerrarMenu.addEventListener("click", () => {

    menuMovil.classList.add("ocultar");
});