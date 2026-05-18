let carrito = [
  { id: 1, producto: "Notebook Pro", precio: 1200, cantidad: 1, categoria: "Hardware" },
  { id: 2, producto: "Mouse Inalámbrico", precio: 45, cantidad: 2, categoria: "Periféricos" },
  { id: 3, producto: "Teclado Mecánico", precio: 90, cantidad: 1, categoria: "Periféricos" },
  { id: 4, producto: "Monitor 24' Full HD", precio: 250, cantidad: 1, categoria: "Hardware" },
  { id: 5, producto: "Auriculares Gamer", precio: 75, cantidad: 1, categoria: "Audio" },
  { id: 6, producto: "Cable HDMI 2.0", precio: 15, cantidad: 3, categoria: "Accesorios" },
  { id: 7, producto: "Silla de Oficina", precio: 300, cantidad: 1, categoria: "Muebles" },
  { id: 8, producto: "Webcam 1080p", precio: 60, cantidad: 1, categoria: "Accesorios" },
  { id: 9, producto: "Pad Mouse XL", precio: 20, cantidad: 2, categoria: "Periféricos" },
  { id: 10, producto: "Disco Externo 1TB", precio: 110, cantidad: 1, categoria: "Hardware" }
];

// PARTE 1 — Mostrar productos************************************************************************************************************

function mostrar(array){
  for (let item of array) {
    console.log(`Producto: ${item.producto} - Precio: ${item.precio} - Cantidad: ${item.cantidad} - Categoria: ${item.categoria}`);
  }
}
mostrar(carrito)


// PARTE 2 — Totales de los productos******************************************************************************************************

function totalProducto(array){
  for (let item of array) {
    console.log(`Producto: ${item.producto} --> Total: ${item.precio * item.cantidad }`);
  }
}
totalProducto(carrito)

// PARTE 3 — Total de un producto **********************************************************************************************************

function calcularTotal(producto) {
  return producto.precio * producto.cantidad;
}

let resultado = calcularTotal(carrito[0]); 

console.log(resultado);

// PARTE 4 — Total general *****************************************************************************************************************

function totalGeneral (array){
  let total = 0;
  for (let item of array) {
    total += item.precio * item.cantidad;
 }
 return total
}
let result = totalGeneral(carrito);
console.log(`El total de todos los productos es ${result}`);

// PARTE 5 — Filtrar ************************************************************************************************************************

function Filtrar(array){
  for (let item of array){
    if(item.categoria == "Hardware"){
      console.log(`Este producto ${item.producto} pertenece a la seccion de Hardware`)
    }
  }
  for (let item of array){  
    if(item.precio >= 100){
      console.log(`El producto ${item.producto} es mayor a cien euros`)
    }
      console.log(`El producto ${item.producto} es menor a cien euros`)    
  }
}
Filtrar(carrito);

// PARTE 6 — Contar *************************************************************************************************************************

function contar(array){
  let totalCanProductos = 0;
  for (let item of array){
    totalCanProductos += item.cantidad;
  }
  return totalCanProductos;
}
cantidadesCatTotales = contar(carrito);

console.log(`El total de las cantidades es ${cantidadesCatTotales}`)

function contarCategorias(array){
  let hardware = 0;
  let periferico = 0;
  let audio = 0;
  let mueble = 0;
  let accesorio =0;
  for (let item of array){
    if(item.categoria == "Hardware"){
      hardware += item.cantidad;
    } else if(item.categoria == "Periféricos"){
      periferico += item.cantidad;
    }else if(item.categoria == "Audio"){
      audio += item.cantidad;
    }else if(item.categoria == "Muebles"){
      mueble += item.cantidad;
    }else{
      accesorio += item.cantidad;
    }
  }
  console.log(`El total de las cantidades Hardware es ${hardware}`);
  console.log(`El total de las cantidades Periférico es ${periferico}`);
  console.log(`El total de las cantidades Audio es ${audio}`);
  console.log(`El total de las cantidades Mueble es ${mueble}`);
  console.log(`El total de las cantidades Accesorio es ${accesorio}`);
}

contarCategorias(carrito);

// PARTE 7 — Búsqueda **************************************************************************************************************************

function buscarProducto(array, nombreBuscado){
  for (let item of array){
    if(nombreBuscado.toLowerCase() == item.producto.toLowerCase()){
      return console.log("Producto encontrado")
    }    
  }
  console.log("Producto no encontrado")
}

buscarProducto(carrito, "auriculares gamer")

// PARTE 8 — Producto más caro *****************************************************************************************************************

function productoCaro(array){
  let caro = array[0];
  for (let item of array){
    if(caro.precio < item.precio){
      caro = item
    }    
  }
  return caro;
}

let resultadoCaro = productoCaro(carrito);
console.log(`El producto más caro es ${resultadoCaro.producto}`)

// PARTE 9 — Manipulación **********************************************************************************************************************

function agregarProducto(array, nuevoProducto){
  array.push(nuevoProducto)
  return array
}
let nuevo = { id: 11, producto: "Teclado Mecánico", precio: 80, cantidad: 1, categoria: "Periféricos" };
agregarProducto(carrito, nuevo)
console.log(carrito)