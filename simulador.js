// CREAR UN BUCLE QUE MUESTRE EN CONSOLA LA TABLA DE MULTIPLICAR DE UN NUMERO DEFINIDO EN UNA VARIABLE

number = parseInt(prompt('Indique un número para mostrar la tabla: '));
const TABLA = 10;
console.log('Tabla del ' + number + ':');
for (let i = 0; i <= TABLA; i++) {
    let total = number * i;
    console.log(total);
}

// CREAR UNA FUNCIÓN QUE DETERMINE SI UN NUMERO ES PRIMO

let num = parseInt(prompt('Indique un número para saber si es primo: '));

function primo(number) {
    divisible = false;
    let i = 2;
    while (!divisible && i < number) {
        if (number % i == 0) {
            divisible = true;
        }
        i++;
    }
    return (!divisible);
}
let numberPrimo = primo(num);

console.log('El numero ' + num + ' es primo: ' + numberPrimo);

// MOSTRAR LOS PRIMEROS 100 NUMEROS PRIMOS

let par = 0;
for (let i = 1; par <= 100; i++) {
    if (primo(i)) {
        console.log(i);
        par++;
    }
}

// CREAR UNA FUNCTION QUE RECIBA DOS PARAMETROS NUMEROS, LUEGO LOS SUME, CALCULE EL PROMEDIO Y LUEGO DEVUELVA COMO RESULTADO EL PROMEDIO. MOSTRAR MEDIANTE ALERT EL RESULTADO:

let numb = parseInt(prompt('Ingrese un número: '));
let numb2 = parseInt(prompt('Ingrese otro número: '));
const calculateAverage = (numb, numb2) => {
    let suma = numb + numb2;
    return suma / 2;
}
alert('El promedio es: ' + calculateAverage(numb, numb2));