///                                              Desafío: Incorporar Arrays
/* Esta declarando una constante y una variable. */
const productoN = [];
let sacar = "";
alert("Bienvenido a onix glam")
/**
 * le pide a el usuario añadir un producto y lo agrega a la lista
 */
function ingresarProducto() {
    let ingresar;
    do {
        ingresar = prompt("Ingresar un nuevo producto");
    } while (ingresar === "" || ingresar === null);
    productoN.push(ingresar);
    let conf = confirm(productoN.join("\n"));
    if (conf === true) {
        nuevaListaDeProducto();
    }
}
/*
 * Esta funcion le pregunta al usuario que seleccione entre tres opciones, y dependiendo de la opcion se hara lo que cada case muestre. nuevo producto, visualizar producto o eliminar producto añadido a la lista
 */
function nuevaListaDeProducto() {
    let nuevaLista;

    do {
        nuevaLista = parseInt(
            prompt(`1)Ingresar nuevo producto
2)Visualizar todos los productos
3)Eliminar producto
                   `)
        );
        switch (nuevaLista) {
            case 1:
                ingresarProducto();
                break;
            case 2:
                productoN.forEach((el) => confirm(el));
                nuevaListaDeProducto();
                break;
            case 3:
                sacar = prompt(`Cual deseas eliminar?
                    ${productoN.join("\n")}`);
                eliminar(sacar);
                nuevaListaDeProducto();
                break;  
            default: 
                alert("Ingresó una opcion invalida");
        }
    } 
    while (isNaN(nuevaLista) || nuevaLista === "" || (nuevaLista != 1 && nuevaLista != 2 && nuevaLista != 3 ));
}
/**
 * Toma un elemento como argumento, encuentra el index de ese elemento en el array y si existe lo remueve del array.
 * el - El elemento que será removido del array. 
 */
const eliminar = (el) => {
    let i = productoN.indexOf(el);
    if (i != -1) {
        productoN.splice(i, 1);
    }
};
/* LLamando a las funciones. */
ingresarProducto();
nuevaListaDeProducto();
eliminar();
