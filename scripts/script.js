// Cambio de imagen al hacer clic
const imagen = document.getElementById("imagen");

imagen.addEventListener("click", () => {
  if (imagen.src.includes("imagen1")) {
    imagen.src = "images/imagen2.jpg";
  } else {
    imagen.src = "images/imagen1.jpg";
  }
});

// Cambio de texto
const input = document.getElementById("inputTexto");
const texto = document.getElementById("texto");

input.addEventListener("input", () => {
  texto.textContent = input.value;
});

// Objeto en movimiento
const caja = document.getElementById("caja");
let posicion = 0;

setInterval(() => {
  posicion += 2;
  caja.style.left = posicion + "px";

  if (posicion > 300) {
    posicion = 0;
  }
}, 30);

