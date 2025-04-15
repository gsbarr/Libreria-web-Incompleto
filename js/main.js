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

function nuevoProd(){
    let nombreProd = document.querySelector("#producto");
    let stockProd = document.querySelector("#stock");

    let nuevoLibro = new Libro(nombreProd.value, stockProd.value);
    // Agregamos el nuevo libro a la lista
    productosEnVenta.push(nuevoLibro);

   console.log(productosEnVenta);
    cargarProd();
}

function cargarProd() {
    let listaVenta = document.querySelector(".formu_listaProd");

    let plantillaVenta = ` <div class="input-field col s6">
                <input placeholder="Producto" id="producto" type="text"  value="${productosEnVenta[0].nombre}" disabled>
                <label for="producto">Nombre del producto</label>
            </div>
            <div class="input-field col s3">
                <input placeholder="Stock" id="stock" type="text" disabled value="${productosEnVenta[0].stock}">
                <label for="stock">Stock</label>
            </div>
            <div class="col s3">
                <br>
                <a class="waves-effect waves-light btn">Agregar 1 a carrito</a>
            </div>
            `;

    listaVenta.innerHTML += plantillaVenta;
}
