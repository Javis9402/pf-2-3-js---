export function fizzbuzz() {
  /** ## Instrucciones
   Escribir un programa con las siguientes características
   1. El programa debe imprimir los números del 1 al 100.
   2. Una vez que tu programa hago esto hacer los siguientes puntos.
   3. Remplazar los números que sean múltiplos de 3 por la palabra Fizz.
   4. Remplazar los números que sean múltiplos de 5 por la palabra Buzz.
   5. Remplazar los números que sean múltiplos de 3 y 5 por la palabra FizzBuzz.
  */

  const numeros = [];

  for (let i = 1; i <= 100; i++) {
    numeros[i] = i;
    console.log(numeros[i]);
  }

  console.log(`==========================`); //Divicion

  for (let i = 1; i < numeros.length; i++) {
    // numeros.splice(posicion, 1); xd estaba mal escrito

    if (numeros[i] % 3 == 0 && numeros[i] % 5 == 0) {
      numeros.splice(i, 1, "FizzBuzz");
    }
    else if (numeros[i] % 3 == 0) {
      numeros.splice(i, 1, "Fizz");
    }
    else if (numeros[i] % 5 == 0) {
      numeros.splice(i, 1, "Buzz");
    }

    // if (numeros[i]%3 ==0 && numeros[i]%5==0) {
    //   numeros.splice(i, 1, "FizzBuzz")
    // }

    console.log(numeros[i]);
  }
}

fizzbuzz();