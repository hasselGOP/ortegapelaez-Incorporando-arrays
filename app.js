///                                              Desafío: Incorporar Arrays
/* La clase productosInventario crea objetos los cuales tiene lad propiedades id,
producto, precio, y tienda. */
class productosInventario {
    constructor(id, producto, precio, tienda) {
        this.id = id
        this.producto = producto.toUpperCase()
        this.precio = precio
        this.tienda = tienda
        }
}

const productoN = []
function agregarInventario() {
    productoN.push(new  productosInventario(001, "audifonos",  1500, "Lindavista"))
    productoN.push(new  productosInventario(002, "computadora", 19800, "Mundo E"))
    productoN.push(new  productosInventario(003, "mouse", 550, "Lindavista"))
    productoN.push(new  productosInventario(004, "camara", 1850, "Parque delta"))
    productoN.push(new  productosInventario(005, "Sensor", 1800, "Tezontle"))
    productoN.push(new  productosInventario(006, "dron", 2400, "Oasis Coyoacan"))
    productoN.push(new  productosInventario(007, "teclado", 1200, "Perisur"))
    } 

    agregarInventario();
    function recorrerInventario() {
        productoN.forEach(element => {
            console.table(element)
        })
    }
alert("Onix glam cdmx la tienda Online mas grande de Mexico")

/* Le pregunta al usuario el nombre del producto y luego gracias a filter lo que hara sera filtrar en el array de productos hasta encontrar el producto que coincida con lo que el usuario escribio */
pedido = prompt("Que producto te interesa comprar?  \n Los siguientes son los productos con los que contamos \naudifonos \ncomputadora \nmouse \ncamara \nsensor \ndron \nteclado").toUpperCase()
let buscar = productoN.filter(el => el.producto.includes(pedido))   

alert("Perfecto, a continuación te diremos cual es el Producto de tu eleccion, Precio y en que tienda fisica puedes encontrar nuestro producto")    
alert(`El producto elegido es: \n ${buscar[0].id}.-${buscar[0].producto} con un precio de $${buscar[0].precio} MXN y contamos con este producto en la tienda fisca de ${buscar[0].tienda}`)
alert(`Gracias por elegirnos, vuelve pronto`)