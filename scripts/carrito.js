
// importo los libros en stock
import { librosStock } from "./main.js";

// si el carrito NO está en el sessionStorage lo creo
JSON.parse(sessionStorage.getItem('carrito')) == null && sessionStorage.setItem('carrito', JSON.stringify([]));
//traigo el carrito del sessionStorage
let carrito = JSON.parse(sessionStorage.getItem('carrito'))


export const agregarCarrito = (idLibroSeleccionado) => {
    // busco el libro en librosStock
    let libroSeleccionado = librosStock.find((libro) => libro.id === idLibroSeleccionado)
    // desconstruyo el objeto libroBuscado con el fin de crear un nuevo objeto
    const {id, titulo, precio, autor, imagen} = libroSeleccionado;

    // verifico si el libro ya se encuentra en el carrito
    const libroCarrito = carrito.find((libro) => libro.id === idLibroSeleccionado);
    // si el libro NO está en el carrito lo agrego
    if(!libroCarrito){
        const libroNuevoCarrito = {
            id:id, 
            titulo: titulo,
            precio: precio,
            autor: autor,
            imagen: imagen,
            cantidad: 1,
        };
        carrito.push(libroNuevoCarrito);
        sessionStorage.setItem('carrito', JSON.stringify(carrito));
    }else{
        // si el libro ya esta en el carrito, modifico la cantidad 
        // encuentro el indice en el array  carrito, en el cual se encuentra el libro
        const indexLibroCarrito = carrito.findIndex((libro) => libro.id === idLibroSeleccionado);
        // obtengo el libro del carrito e incremento su cantidad en 1
        carrito[indexLibroCarrito].cantidad++;
        //actualizo el precio
        carrito[indexLibroCarrito].precio = precio*carrito[indexLibroCarrito].cantidad;

        // actualizo el sessionStorage
        sessionStorage.setItem('carrito',JSON.stringify(carrito))
    }
    /* Swal.fire(
        'Artículo agregado!',
        'You clicked the button!',
        'success'
    ) */
    let timerInterval
    Swal.fire({
    title: 'Artículo agregado al carrito',
    //html: 'I will close in <b></b> milliseconds.',
    timer: 500,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
        }, 1000)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
    }
    })

    //actualizo el carrito después de haberlo modificado
    carrito = JSON.parse(sessionStorage.getItem('carrito'));
}

// obtengo el boton del carrito y le agrego un eventListener para que cuando se de click muestre un mensaje con la cantidad de items en el carrito y el total a pagar
const btn_carrito = document.getElementById("bi");
btn_carrito.addEventListener("click", () => {
    // verifico si el carrito no está vacío
    if(carrito.length != 0){
        Swal.fire(`
            Cantidad de items: ${carrito.reduce((acu, ele) => acu+ele.cantidad,0)}\n
            Total a pagar: $${carrito.reduce((acu, ele) => acu+ele.precio,0)}
        `)
    }else{
        Swal.fire("No hay items en el carrito");
    }
    
});




