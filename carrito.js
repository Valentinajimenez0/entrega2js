let usuario;

function registro(){
     usuario = {
        nombre: prompt("Ingrese su nombre porfavor"),
        edad: parseInt(prompt("Ingrese su edad")),
        dni: parseInt(prompt("Ingrese su dni")),
    }
    alert(`Bienvenido a mi tienda, ${usuario.nombre}
    te cuento acerca de mi, soy Fabiana y desde que son pequeña me gusta pintar, todo lo que hago lo hago con mucho amor y dedicacion. 
    Vamos a verificar si tus datos son correctos tu DNI es : ${usuario.dni} y tu edad ${usuario.edad} años`)
}

registro();

const productosDisponibles = [];

productosDisponibles.push(new Productos("Kalimera", 2000, "Rojo"))
productosDisponibles.push(new Productos("Calinista", 5000, "Negro"))
productosDisponibles.push(new Productos("Yasas", 3500, "Verde"))
productosDisponibles.push(new Productos("Ticanis", 6000, "Azul"))
productosDisponibles.push(new Productos("Kalispera", 2000, "Rojo"))
productosDisponibles.push(new Productos("Kala", 2780, "Amarillo"))

const si = "si";
const no = "no";
let eleccion;
let continuar;
let cantidad = 0;
let total = 0;
let productoSeleccionado;

const carritoCliente = [];

function mostrarProducto (){ 

        do{
                const todosLosCuadros = productosDisponibles.map((cuadro,index)=> `${index + 1} - ${cuadro.nombre} $${cuadro.precio} ${cuadro.color}` );

                eleccion = prompt ("Nuestros productos disponibles son: "+ "\n "+  todosLosCuadros.join(" \n ")+ "\n " + "ingrese el numero del producto q desea " );

                if (isNaN(eleccion) || eleccion < 1 || eleccion > productosDisponibles.length){
                    alert("Debe ingresar el numero del producto")
                    }else{
                        productoSeleccionado = productosDisponibles[eleccion - 1];
                        alert(`Usted selecciono el articulo ${productoSeleccionado.nombre} de color ${productoSeleccionado.color}`)
                    
                cantidad = parseInt(prompt ("Ingrese la cantidad que desea"));

                carritoCliente.push(new Item(productosDisponibles[eleccion-1].nombre, productosDisponibles[eleccion-1].precio,cantidad))

                continuar = prompt ("Desea continuar comprando? escriba si o no");

                continuar = continuar.toLocaleLowerCase();

                     }
                     
        } while (continuar == si || continuar != no )
    }

mostrarProducto ();

total = carritoCliente.reduce((acum, articulo) => acum + articulo.precio*articulo.cantidad ,0   )

alert(`El total a pagar es de $ ${total}`)


const saludo = alert (`Gracias por su compra! ${usuario.nombre}`);
