// //EJEMPLO CARRITO MARCO

const contenedorProductos = document.getElementById(`contenedor-productos`);

const productos =  [
         { id: 1, nombre: "Las Travesuras de Supertincho", producto: "Libro", precio: 2590, img: "multimedia/img/Travesuras de Supertincho.jpg" },
         { id: 2, nombre: "El Mega Cumpleaños de Mr. T.", producto: "Libro", precio: 2590, img: "multimedia/img/Cumpleaños Mr T.jpg" },
];

const carrito = [];

const mostrarProductos = () => {
    productos.forEach(producto => {
        contenedorProductos.innerHTML += `
            <div class="prod-container">
            <img src="${producto.img}"/>
            <h2>${producto.nombre}</h2>
            <p>$${producto.precio}</p>
            <button id="${producto.id}" class="agregar">Agregar al Carrito</button>
        </div>
        `;
    });
}

const agregarAlCarrito = e => {
    if (e.target.classList.contains('agregar')) {
        const id = e.target.id;
        const producto = productos.find(producto => producto.id == id);
        carrito.push(producto);
        mostrarCarrito();
    }
}

const mostrarCarrito = () => {
    const contenedorCarrito = document.getElementById('contenedor-carrito');
    contenedorCarrito.innerHTML = '<h2>Carrito:</h2>';
    carrito.forEach(producto => {
        contenedorCarrito.innerHTML += `
            <p>${producto.nombre} \t $${producto.precio}</p>
        `;
    });
}

document.addEventListener("DOMContentLoaded", mostrarProductos);

contenedorProductos.addEventListener(`click`, agregarAlCarrito);

//MI PREENTREGA 2

// do {
//     let usuario = prompt("Ingrese su nombre:");
//         alert(`Hola ${usuario}, bienvenido a BordaCuentos!`);
    
//     const productos =  [
//     { id: 1, nombre: "Las Travesuras de Supertincho", producto: "Libro", precio: 2590 },
//     { id: 2, nombre: "El Mega Cumpleaños de Mr. T.", producto: "Libro", precio: 2590 },
//     ];
    
//     let nombre = prompt("¿Qué libro deseas buscar?");
//     const producto = productos.find((item) => item.nombre === nombre);
    
//     if (producto) {
//         alert(`
//         Id: ${producto.id}
//         Nombre: ${producto.nombre}
//         Producto: ${producto.producto}
//         Precio: ${producto.precio}
//         `)
//         let libros = Number(prompt("Dinos, ¿cuántos libros deseas comprar?"));
//     alert(`El total es: $ ${producto.precio * libros}`);
    
//     if (libros > 0) {
//         alert("¡Gracias por tu compra!")
//     }else{
//         alert("Por favor ingresa una cantidad válida.")
//     }
//     } else {
//         alert("Lo siento, producto no disponible, ¡Inténtalo de nuevo!");
//     }
//     }
//     while (confirm("¿Deseas realizar otra compra?"));


// //Simular carrito de compras - Ejemplo en Clase 13

// // const productos = [
// // { id: 1, nombre: "camisa", precio: 1000 },
// // { id: 2, nombre: "media", precio: 750 },
// // { id: 3, nombre: "zapato", precio: 980 },
// // { id: 4, nombre: "gorra", precio: 320 },
// // ];

// // localStorage.setItem("carrito", JSON.stringify(productos));

// let carrito;
// //traemos el carrito del storage
// let carritoStorage = localStorage.getItem("carrito");
// //traemos el boton para eliminar el carrito
// let boton = document.getElementById("boton");

// if (carritoStorage) {
//     carrito = JSON.parse(carritoStorage);
// } else {
//     carrito = [];
//     let div = document.createElement("div");
//     div.innerHTML = "Carrito vacío";

//     document.body.append(div);
// };

// //recorremos el carrito
// carrito.forEach(item => {
//     let div = document.createElement("div");
//     div.innerHTML = `
//     <h2>Id: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//     `;

//     document.body.append(div);
// });

// //agregamos el escuchador de evento para el boton
// boton.addEventListener("click", () => {
//     localStorage.clear(); // borramos el storage
//     alert("Carrito eliminado");
//     location.reload(); // recargamos la pagina
// })