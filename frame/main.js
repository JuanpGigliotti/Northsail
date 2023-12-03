//contenedores de tienda afuera burraso
let tiendacontainer = document.getElementById("tienda__container");
const vercarrito = document.getElementById("vercarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

//carrito de compras

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


//json
fetch(`frame/data.json`)
    .then((response) => response.json())
    .then((data) => {
        data.forEach((item) => {
            let productDiv = document.createElement("div");
            productDiv.classList.add("tienda-container");
            productDiv.innerHTML = `
            <img class= "tienda-imagen" src="${item.imagen}" alt="${item.nombre}">
            <div class="tienda-body">
                <h4>${item.nombre}</h4>    
                <p>${item.tipo}</p>
                <b>$${item.precio}</b>
                <button id="boton${item.id}"><span>Agregar</span></button>
            </div>
        <hr />
`;
tiendacontainer.append(productDiv);

//boton de compra

let boton = document.getElementById(`boton${item.id}`);
    boton.addEventListener("click", () => {    
        const repeat = carrito.some((repeatProduct) => repeatProduct.id == item.id);
        if(repeat){
        carrito.map((prod) => {
            if(prod.id === item.id){
                prod.cantidad++;
            };
        });
        }else{
        carrito.push({
            id: item.id,
            imagen: item.imagen,
            nombre:item.nombre,
            tipo: item.tipo,
            precio: item.precio,
            cantidad:item.cantidad
        });
    console.log(carrito);
    console.log(carrito.length);
    carritoCounter();
    saveLocal();
};
});
});

//carrito de compras
const pintarcarrito = () =>{
    modalContainer.style.display = "block";
    modalContainer.innerHTML = "";
    const modalHeader = document.createElement("div");
    modalHeader.className= "modal-header";
    modalHeader.innerHTML = `
    <h1 class = "modal-header-title">Market</h1>
   `;
   modalContainer.append(modalHeader);

   const modalbutton = document.createElement("h1");
   modalbutton.innerText = "X";
   modalbutton.className = "modal-header-button";

   modalbutton.addEventListener("click", () =>{
    modalContainer.style.display = "none";
   });

   modalHeader.append(modalbutton);


//carrito de compras recorrido
carrito.forEach((item) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
        <img src=" ${item.imagen}">
        <h3>$${item.nombre}</h3>
        <p>$${item.precio} $</p>
        <span class="restar"> - </span>
        <p>${item.cantidad}</p>
        <span class="sumar"> + </span>
        <p>${item.cantidad * item.precio}</p>
        <span class="delete-product">❌</span>
    `;

    modalContainer.append(carritoContent);

//sumar,restar y eliminar carrito

let restar = carritoContent.querySelector(".restar");
    restar.addEventListener("click", () => {
        if(item.cantidad != 1){
        item.cantidad--;
        };
        saveLocal();
        pintarcarrito();
        
    });
    

let sumar = carritoContent.querySelector(".sumar");
sumar.addEventListener("click", () => {
    item.cantidad++;
    saveLocal();
    pintarcarrito();
});

let eliminar = carritoContent.querySelector(".delete-product");
    eliminar.addEventListener("click", () => {
        eliminarProducto(item.id);
    });
});

//total del carrito

const total = carrito.reduce((ac, item) => ac + item.precio * item.cantidad , 0);
const totalCompra = document.createElement("div");
    totalCompra.className = "total-content";
    totalCompra.innerHTML = `TOTAL <br> ${total} $ <br>
    <button class= "boton-pago">Pay</button>
    
    `;
    modalContainer.append(totalCompra);
};

vercarrito.addEventListener("click", pintarcarrito);

//eliminar prod
const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCounter();
    saveLocal();
    pintarcarrito();
};
});

//contador de carrito cuanto va

const carritoCounter = () => {
    cantidadCarrito.style.display= "block";
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};
carritoCounter();

//localstorage.
const saveLocal = () =>{
localStorage.setItem("carrito", JSON.stringify(carrito));
};

//copy

document.getElementById('year').textContent = new Date().getFullYear();


//formulario

let formulario = document.getElementById("form-cliente");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;

    let datosFormulario = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono
    };

    let datosFormularioJSON = JSON.stringify(datosFormulario);
    localStorage.setItem("datosFormulario", datosFormularioJSON);

    let timerInterval;
Swal.fire({
  title: "Form submitted successfully",
  html: "<b></b>",
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});



let datosFormularioJSONRecuperados = localStorage.getItem("datosFormulario");
let datosFormularioRecuperados = JSON.parse(datosFormularioJSONRecuperados);
console.log(datosFormularioRecuperados);
});
//basicamente es para crear un arreglo como aun no aplicamos backend en este proyecto no se pudo hacer mucho mas...