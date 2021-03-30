let psw = "123";
let input = "1234";

let result = psw == input;

if (result == true)
{
    console.log("Login Correcto");
}
else 
{
    console.log("Login Inconrrecto");
}

let x = 1;
let y = 10;

if (x>y) 
{
    console.log("El primero es mayor");
}
else if (x<y)
{
    console.log("El segundo es mayor");
}
else 
{
    console.log("Ambos son iguales");
}

//switich
let typeCard = 'Black Card';

switch (typeCard)
{ 
    case 'Debit Card': console.log("Tarjeta de Debito"); break;
    case 'Credit Card': console.log("Tarjeta de Credito"); break;
    case 'Black Card': console.log("Tarjeta de Negra"); break;
    default: console.log("No es una tarjeta");
}