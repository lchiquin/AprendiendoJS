function saludar(name)
{
    console.log("Bienvenido " + name);
}


saludar('Luis');

//trasladando una cadena por funciones
let names = ['Luis', 'Darwin', 'Hamiltong','Mayita'];

for (let i=0; i<names.length; i++)
{
    saludar(names[i]);
}

//trasladando varios parametros
function sumar(x,y)
{
    console.log("El resultado es: ",x+y);
}

sumar(2,3);