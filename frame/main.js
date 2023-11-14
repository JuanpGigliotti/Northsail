//constructor carrito

class producto{
    constructor(id,nombre,imagen,descripcion,precio){
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.precio = precio
    }

}

//arreglo prodocutos

const productos = [
    new producto(1,"THISTLE PROCTOR JIB","../imagenes/tienda1.webp","All-Purpose",10509),
    new producto(2,"SABOT - NAPLES T6 MAINSAIL","../imagenes/tienda2.webp","All-Purpose (38-42kg)",14670),
    new producto(3,"J-22 BIG FOOT JIB","../imagenes/tienda3.webp","Sailor weight > 95 lbs",25680),
    new producto(4,"FLYING SCOT JIB","../imagenes/tienda4.webp","Snug Rig",12007),
    new producto(5,"THISTLE VS MAINSAIL","../imagenes/tienda5.webp","All-Purpose",16700),
    new producto(6,"DAY SAILER JIB","../imagenes/tienda6.webp","All-Purpose",18070),
    new producto(7,"VIPER 640 J-5 JIB","../imagenes/tienda7.webp","All-Purpose | Aramid",14560),
    new producto(8,"SOLO P-3 MAINSAIL","../imagenes/tienda8.webp","All-Purpose | Sailors 75-90kg",13000),
    new producto(9,"MC SCOW MAGNUM MAINSAIL","../imagenes/tienda9.webp","All-Purpose",14500),
    new producto(10,"J-24 FAT HEAD MAINSAIL","../imagenes/tienda10.webp","All-Purpose",13567),
    new producto(11,"J-22 M7 MAINSAIL","../imagenes/tienda11.webp","All-Purpose",13346),
    new producto(12,"SNIPE R3-LM JIB","../imagenes/tienda12.webp","Heavy Wind | Light Crew",11513),
    new producto(13,"SHIELDS MAINSAIL","../imagenes/tienda13.webp","All-Purpose",10350),
    new producto(14,"IC37 MNI-1 MAINSAIL","../imagenes/tienda14.webp","All-Purpose",12530),
    new producto(15,"2.4M FR-1 MAINSAIL","../imagenes/tienda15.webp","Light-Medium | Charger Masts",10394),
    new producto(16,"2.4M CA-T75 JIB","../imagenes/tienda16.webp","Light | Charger masts",13356),
    new producto(17,"SOLO L-3 MAINSAIL","../imagenes/tienda17.webp","All-Purpose | Sailors 75-90kg",10498),
    new producto(18,"MELGES 24 P1 AIRX ASYMMETRIC","../imagenes/tienda18.webp","All-Purpose | Sailors Below 75kg",14039),
    new producto(19,"J-70XCS-4 MAINSAIL","../imagenes/tienda19.webp","All-Purpose | Flat Waters",12043),
    new producto(20,"J-24 SD/TH GENOA","../imagenes/tienda20.webp","All-Purpose | Ultimate Durability",12933)
];

const agregar = (id) =>{
    const producto = productos.find((item) => item.id === id);

    //aca iria la herramienta que mostro el profe pero no tengo ganas de buscar
}

//contenedor afuera burraso
let div = document.getElementById("tienda__container");


productos.forEach((item) => {
    let productDiv = document.createElement("div");

    productDiv.innerHTML = `
    <div class="tienda-container">
    
        <img src="${item.imagen}" alt="${item.nombre}">
    
        <div class="tienda-body">
            <h4>Nombre: ${item.nombre}</h4>    
            <p>${item.descripcion}</p>
            <b>$${item.precio}</b>
            <button id="boton${item.id}">Agregar</button>
        </div>
    </div>    
    
    <hr />
`;

    document.getElementById("tienda__container").appendChild(productDiv);

    let boton = productDiv.querySelector(`#boton${item.id}`);

         boton.addEventListener("click", () => agregar(item.id));
});


























//copy
document.getElementById('year').textContent = new Date().getFullYear();


