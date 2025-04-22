class Libro {

    nombre;
    stock;

    constructor(nom, sto){
        this.nombre = nom;
        this.stock = sto;
    }
    
    get nombre() {
        return this.nombre
    }
}

let productosEnVenta = [];
let productosCarrito = [];

function nuevoProd(){
    let nombreProd = document.querySelector("#producto"); // es como CSS
    let stockProd = document.querySelector("#stock");

    let nuevoLibro = new Libro(nombreProd.value, stockProd.value);
    // Agregamos el nuevo libro a la lista
    productosEnVenta.push(nuevoLibro);

    console.log(productosEnVenta);
    cargarProd();
}
 
function agregarListaCarrrito(){

    let nombreProd = document.querySelector("#productoVenta"); 
    let stockProd = document.querySelector("#stockVenta");

    let nuevoLibro = new Libro(nombreProd.value, stockProd.value);
    // Agregamos el nuevo libro a la lista
    productosCarrito.push(nuevoLibro);

    console.log(productosCarrito);
    cargarCarrito();

}

function cargarProd() {
    let listaVenta = document.querySelector(".formu_listaProd");

    listaVenta.innerHTML = "";

    productosEnVenta.forEach((libro) => {

        let plantillaVenta = ` <div class="input-field col s6">
            <input placeholder="Producto" id="productoVenta" type="text"  value="${libro.nombre}" disabled>
            
        </div>
        <div class="input-field col s3">
            <input placeholder="Stock" id="stockVenta" type="text" disabled value="${libro.stock}">
            
        </div>
        <div class="col s3">
            <br>
            <a class="waves-effect waves-light btn" onclick="">Eliminar</a>
        </div>
        `;

            listaVenta.innerHTML += plantillaVenta;

    });
   
}

function cargarCarrito() {
    let listCarrito = document.querySelector(".formu_listaCarrito");

    listCarrito.innerHTML = "";

    productosCarrito.forEach((libro) => {

        let plantillaVenta = ` <div class="input-field col s6">
            <input placeholder="Producto" id="productoVenta" type="text"  value="${libro.nombre}" disabled>
            
        </div>
        <div class="input-field col s3">
            <input placeholder="Stock" id="stockVenta" type="text" disabled value="${libro.stock}">
            
        </div>
        <div class="col s3">
            <br>
            <a class="waves-effect waves-light btn" onclick="agregarListaCarrrito()">Agregar 1 a carrito</a>
        </div>
        `;

        listCarrito.innerHTML += plantillaVenta;

    });
   
}
