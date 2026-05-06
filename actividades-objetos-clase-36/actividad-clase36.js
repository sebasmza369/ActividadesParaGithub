
let carrito = [
 { producto: "Notebook", precio: 1000, cantidad: 3 },
 { producto: "Mouse", precio: 50, cantidad: 2 },
 { producto: "Teclado", precio: 100, cantidad: 4 },
 { producto: "Monitor", precio: 200, cantidad: 1 }
];
 

// Actividad 10 — Agregar producto. *********************************************************************

 let agregarProducto = prompt("ingrese el nombre del producto que desea");
let agregarPrecio = prompt("ingrese el precio que desee");
let agregarCantidad = prompt("ingrese la cantidad que desee");

let nuevoProducto = {
    producto: agregarProducto,
    precio: parseFloat(agregarPrecio),
    cantidad: parseInt(agregarCantidad)
}

carrito.push(nuevoProducto)

console.log(carrito)

// Actividad 11 — Buscar producto ***********************************************************************

let busqueda = prompt("¿Que producto desea buscar?");

function encontrarProducto (array) { // no funciona bien
    for (let obj of array){
        if (obj.producto == busqueda)
            console.log(`El producto ${busqueda} existe`)
        else{
            console.log(`El producto ${busqueda} no existe`)
        }
    }
}
encontrarProducto(carrito)

function encontrarProducto (array) {
    let existe = false;
    for (let obj of array){
        if (obj.producto.toLowerCase() === busqueda.toLowerCase()){
            existe = true
            break;  
        }         
    }
        return existe;
}
let resultado = encontrarProducto(carrito);
if (resultado){
    console.log("El producto existe")
}else{
    console.log("El producto no existe")
}

// Actividad 12 — Eliminar producto (conceptual)  ******************************************************

carrito.pop(); //eliminar producto de forma sencilla
console.log(carrito)

function eliminarProducto(array, nombreABorrar){
    let nuevoCarrito = [];
    for(let obj of array){
        if(obj.producto !== nombreABorrar){
            nuevoCarrito.push(obj)
        }    
    }
    return nuevoCarrito;
}
carrito = eliminarProducto(carrito, "Mouse");
console.log(carrito);

//Actividad 13 — Modificar producto *********************************************************************

function modificarCantidad(array, productoABuscar){
    for(let obj of array){
        if(obj.producto.toLowerCase() === productoABuscar.toLowerCase()){
            let nuevaCantidad = prompt(`¿Que nueva cantidad nueva quieres para ${obj.producto}`)
            obj.cantidad = parseInt(nuevaCantidad);
            console.log("cantidad actualizada con exito");
            return;
        }
    }
    console.log("El producto no se encontro");
}

modificarCantidad(carrito, "Monitor");

console.log(carrito);

// Actividad 14 — El más caro. ****************************************************************************

function encontrarMasCaro(array) {
    let productoMasCaro = array[0];

    for (let i = 1; i < array.length; i++) {        
        if (array[i].precio > productoMasCaro.precio) {          
            productoMasCaro = array[i];
        }
    }    
    return productoMasCaro;
}
let resultado = encontrarMasCaro(carrito);
console.log(`El producto más caro es ${resultado.producto} y cuesta € ${resultado.precio}`);