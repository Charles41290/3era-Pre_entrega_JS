// Defino las clases Libro y Autor
class Autor{
    constructor(nombre, nacionalidad){
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
    }
}

class Libro{
    constructor(id, titulo, precio, autor, imagen){
        this.id = id;
        this.titulo = titulo;
        this.precio = precio;
        this.autor = autor;
        this.imagen = imagen;
    }
}

// creo un arreglo con de autores;
const autores = [
    new Autor("J.R.R. Tolkien", "Sudafrica"),
    new Autor("Umberto Eco", "Italia"),
    new Autor("Gabriel García Márquez", "Colombia"),
    new Autor("Ernesto Sabato", "Argentina"),
    new Autor("Mario Vargas Llosa", "Perú"),
];

// creo un array que contiene las url de las imgs de los libros
const imagenes =[
    "https://images.cdn1.buscalibre.com/fit-in/180x180/c6/78/c678ab2c90ed50d7d8849e30bc92b05a.jpg",
    "https://images.cdn3.buscalibre.com/fit-in/180x180/d7/f8/d7f867bff058f9d804aa16a0cdc2b493.jpg",
    "https://images.cdn3.buscalibre.com/fit-in/180x180/02/59/0259a6f1eba02e8b9caf8a86d376f05e.jpg",
    "https://image.cdn0.buscalibre.com/513e0830ac2a6366a1df07d5.__RS180x180__.jpg",
    "https://images.cdn1.buscalibre.com/fit-in/180x180/18/d1/18d10474b8fb67e3badcb86afc66a13a.jpg",
    "https://images.cdn1.buscalibre.com/fit-in/180x180/4d/b9/4db9da291dbd3e39949c68bfd8e364b9.jpg",
    "https://images.cdn2.buscalibre.com/fit-in/180x180/61/ae/61ae72a4e3f3bcbc2f37fca9a8df4f8a.jpg",
];

// creo un arreglo de libros
const libros = [
    new Libro(1,"El señor de los anillos", 25000, autores[0],imagenes[0]),
    new Libro(2,"Cien años de soledad", 35700, autores[2],imagenes[1]),
    new Libro(3,"El cementerio de Praga", 26900, autores[1],imagenes[2]),
    new Libro(4,"Travesuras de la niña mala", 45000, autores[4],imagenes[3]),
    new Libro(5,"El túnel", 26000, autores[3],imagenes[4]),
    new Libro(6,"El nombre de la rosa", 15720, autores[1],imagenes[5]),
    new Libro(7,"Del amor y otros demonios", 23000, autores[2],imagenes[6]),
];

// verifico si hay libros en el localStorage si no, los almaceno 
JSON.parse(localStorage.getItem('libros')) || localStorage.setItem('libros', JSON.stringify(libros)); 