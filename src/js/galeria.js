let slider = document.querySelector(".galeria__img");
let sliderIzq = document.querySelector("#btnIzq");
let sliderDer = document.querySelector("#btnDer");

sliderDer.addEventListener("click", () => {
	slider.style.transform = `translateX(${-26.5}%)`;
});

sliderIzq.addEventListener("click", () => {
	slider.style.transform = `translateX(${0}%)`;
});