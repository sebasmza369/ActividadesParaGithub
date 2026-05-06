// ejercicio 4. mostrar nombre y precio

let productos = [
 { nombre: "Notebook", precio: 1000 },
 { nombre: "Mouse", precio: 50 },
 { nombre: "Teclado", precio: 100 }
];

console.log(productos); //todos

function mostrarPrecio(array) {  //precio
    for(let productos of array){
        console.log(productos.precio)
    }
}
mostrarPrecio(productos);  

function mostrarNombre(array) {  //nombre
    for(let productos of array){
        console.log(productos.nombre)
    }
}

mostrarNombre(productos)

// Actividad 5 — Productos caros.

function productosCaros(array) {
    for( let productos of array)
        if (productos.precio >= 100) {
            console.log(productos)
        }
}
productosCaros(productos)

//Actividad 6 — Calcular total precios

function totalPrecios(array){
    let total = 0;
    for(let productos of array){
        total += productos.precio
    }
    return total
}
 
let totalSumado = totalPrecios(productos);
console.log(`El total es: ${totalSumado}`);

// Desafío Extra - promedio

function promedioPrecio(array) {
    let suma = totalPrecios(array)
    let promedio = suma / array.length;
    return `El promedio de precio es ${promedio}`    
}

let totalPromedio = promedioPrecio(productos)
console.log(totalPromedio)



// Actividad 7 — Carrito básico

let carrito = [
 { producto: "Notebook", precio: 1000, cantidad: 1 },
 { producto: "Mouse", precio: 50, cantidad: 2 }
];

function mostrarProductos(array){ // mostrar producto
    for(let productos of array){
        console.log(productos)
    }
}
mostrarProductos(carrito);

function mostrarCantidad(array){ // mostrar cantidad
    for(let productos of array){
        console.log(productos.cantidad)
    }
}
mostrarCantidad(carrito);

function totalPorProducto(array) { // total por producto
    for(let productos of array){        
        let subtotal = productos.precio * productos.cantidad;
        console.log(`El total del producto ${productos.producto} es: ${subtotal}`)
    }
}
totalPorProducto(carrito);

// Actividad 8 — Total del carrito

function totalProductos(array){ 
    let suma = 0
    for(let productos of array){ 
        suma += productos.precio * productos.cantidad;
    }
    return suma;
}
let totalcarrito = totalProductos(carrito)
console.log(`El total de los productos es ${totalcarrito}`)

// Actividad 9 — Productos con descuento

function importeMayor(array) {
    for(let productos of array){
        let total = productos.precio * productos.cantidad;
        if(total > 100){
          console.log(`El producto ${productos.producto} es mayor a € 100 `)  
        }
    }        
}
importeMayor(carrito)