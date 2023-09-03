// importo la funcion agregarCarrito del script carrito.js
import { agregarCarrito } from "./carrito.js";

// funcion para renderizar los libros
const generarProductsCards = (libros) => {
    librosDiv.innerHTML = "";

    libros.forEach(libro => {
        // desestructura el objeto libro
        const {id, titulo, precio, autor, imagen} = libro;

        let card = document.createElement("div")
        card.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${imagen}" alt="Card image cap">
            <div class="card-body">
                <p class="card-text"> ${titulo}</p>
                <p class="card-text"> ${autor.nombre}</p>
                <p class="card-text"> $${precio}</p>
                <button id = "btn_agregar_carrito${id}" class = "btn btn-primary">Agregar al carrito</button>
            </div>
        </div>
        `;
        librosDiv.appendChild(card);

        const btnAgregarCarrito = document.getElementById(`btn_agregar_carrito${id}`);
        btnAgregarCarrito.addEventListener("click",()=> agregarCarrito(id)); // la función agregar carrito se exporta del script carrito.js
    });
}

let librosDiv = document.getElementById("libros");// obtengo del DOM el contenedor que va a tener las cards de los libros
export const librosStock = JSON.parse(localStorage.getItem('libros'));// obtengo los libros cargados en el localStorage mediante el script productos.js -> exporto librosStock para poder utilizarla en carrito.js


document.addEventListener("DOMContentLoaded", () => {
    generarProductsCards(librosStock);
})







