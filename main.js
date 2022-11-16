
const productos = [

{
    nombre: "Margarita",
    ingredientes: ["Muzza", "Tomate", "Albahaca"],
    precio: 1000,
    id:1

},

{
    nombre: "Cuatro quesos",
    ingredientes: ["Muzza", "queso gorgonzola", "queso parmesano", "queso fontina"],
    precio: 1300,
    id:2

},

{
    nombre: "pepperoni",
    ingredientes: ["pepperoni", "embutido", "tomate", "Muzza"],
    precio: 1000,
    id:3
},

{
    nombre: "cuatro estaciones",
    ingredientes: ["pepperoni", "embutido", "tomate", "Muzza"],
    precio: 1300,
    id:4
},

{
    nombre: "champiñones",
    ingredientes: ["hongos", "champiñones", "tomate", "Muzza"],
    precio: 1000,
    id:5
},

{
    nombre: "marinara",
    ingredientes: ["salsa marinara", "tomate", "hierbas aromáticas","cebollas"],
    precio: 1300,
    id:6
},

]


const idImpares = productos.filter ((producto) => {

return producto.id % 2 === 1;
}
);

idImpares.forEach ((producto) => {

    console.log (`La pizza ${producto.nombre} tiene un id impar`)
});



const PorductosMenorA = (precio) => {
	return productos.some((producto) => {
		return producto.precio < precio;
	})
        ? console.log(`Hay productos con precio mayor a $${precio}`)
		: console.log(`No hay productos con precio mayor a $${precio}`);
};

PorductosMenorA(600);



