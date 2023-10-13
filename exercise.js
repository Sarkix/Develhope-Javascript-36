function repeatHello(callback) {
  const intervalId = setInterval(() => {
    callback();
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
  }, 5000);
}

const sayHello = () => console.log("Hello");

repeatHello(sayHello);

// En el ejercicio, utilizamos una función de flecha para definir la función de callback sayHello. Esto asegura que sayHello mantenga el mismo valor de this que tenía cuando se definió, sin importar cómo se llame dentro de repeatHello. En este caso, sayHello no utiliza this, pero si lo hiciera, esta decisión evitaría problemas relacionados con this que podrían surgir en otras circunstancias.
