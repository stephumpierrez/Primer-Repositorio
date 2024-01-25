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
            <button id="${producto.id}" class="agregar btn btn-outline-primary btn-sm" href="#" role="button"">Agregar al Carrito</button>
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

localStorage.setItem("carrito", JSON.stringify(productos));

let carritoStorage = localStorage.getItem("carrito");
let boton = document.getElementById("boton");

if(carritoStorage) {
    carrito = JSON.parse(carritoStorage);
} else {
    carrito = [];
    let div = document.createElement("div");
    div.innerHTML = "Carrito Vacío";

    document.body.append(div);
}

carrito.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <p>$${item.precio}</p>
    `;

    document.body.append(div);
});

boton.addEventListener("click", () => {
    localStorage.clear();
    alert("Carrito eliminado");
    location.reload();
});

