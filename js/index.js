
// DECLARACIÓN DE VARIABLES
let nom;
let ed;
nom="Verónica";
ed=35;

console.log(nom);
console.log("Mi nombre es " +nom +" y mi edad es " +ed);
// TEMPLATE DE CADENAS - INTERPOLACIÓN DE CADENAS
console.log(`Mi nombre es ${nom} y mi edad es ${ed}`);

// TIPO DE DATO NAN
let numero=7;
let letra="a"; 
console.log(numero);

let resultado=numero*"a";
console.log(resultado);

// BOOLEAN
let verdad=true;
let falso=false;

console.log(verdad);
// NULL
let b=null;

// IMPRIMIR CONSOLE.LOG - DOCUMENT.WRITE - ALERT

console.log(`Mi nombre es ${nom} y mi edad es ${ed}`);
// document.writeln(`Mi nombre es ${nom} y mi edad es ${ed}`);
// alert(`Mi nombre es ${nombre} y mi edad es ${edad}`);

// OBJETOS
const persona={
    nombre: "Gabriela",
    apellido: "Ponce",
    est_civil: "Soltera",
    edad: 24,
    contacto:{
        telefono: "09999999",
        email: "gaby@gmail.com",
        instagram: "@gaby87"
    },
    pasatiempos:["Leer","Correr","Cocinar"],
    saludar:function(){
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y soy ${this.est_civil}`);
    }
}

// IMPRIMIR LA EDAD DE LA PERSONA
console.log(persona.edad);
// LLAMAR A LA FUNCIÓN SALUDAR DEL OBJETO PERSONA
persona.saludar();
// IMPRIMIR EN CONSOLA LAS CLAVES DEL OBJETO PERSONA
console.log(Object.keys(persona));
// IMPRIMIR EN CONSOLA LOS VALORES DEL OBJETO PERSONA
console.log(Object.values(persona));

// DESTRUCTURACIÓN DEL OBJETO PERSONA
const{nombre, apellido, est_civil, edad, contacto:{telefono, email, instagram}, pasatiempos}=persona;
console.log(nombre);

// ARREGLOS
const array=[2, "David", true, 5, 7, "Alex"];
// IMPRIMIR EL ELEMENTO 1 DEL ARREGLO ARRAY
console.log(array[1]);
// RELLENAR CON 50 TRUE EN EL ARREGLO "D"
const d = Array(50).fill(true);
// IMPRIMIR EL ARREGLO "D"
console.log(d);
// INGRESAR AL FINAL DEL ARREGLO "ARRAY" EL NOMBRE "DENNIS"
array.push("Dennis");
// IMPRIMIR EN CONSOLA EL ARREGLO "ARRAY"
console.log(array);
// QUITAR DEL ARREGLO "ARRAY" EL ÚLTIMO ELEMENTO INGRESADO
array.pop();
// IMPRIMIR EN CONSOLA EL ARREGLO "ARRAY"
console.log(array);

// RECORRE EL ARREGLO "ARRAY" Y COLOCA DENTRO DE LI LOS ELEMENTOS QUE CONTIENE
array.forEach(function(elemento){
        console.log(`<li>${elemento}</li>`);
})

// DESTRUCTURACIÓN DE SWM   ]7 ARREGLOS
const numeros=[1, 2, 3];
const [uno, dos, tres] = numeros;
console.log(uno, dos, tres);

// DESTRUCTURACIÓN DE UN OBJETO
const empleado={
     name1: "Alonso",
     lastName:"Silva",
     maritalStatus: "Casado"
}
const{name1, lastName, maritalStatus}=empleado;
console.log(name1);