
type letrasonumeros = string | number;


//propio alias

let letrasonumeros = "hola";


//String
let cadena: string = "soy un string";



//number
let numero: number = 12;


//booleano
let verdadedo_falso:boolean = true;

//any
let cualquiera: any = "no hay problema";


//arrays
var lenguajes:Array<String> = ["PHP", "JS", "CSS"];

let years: number[] = [1,2,3,4];


console.log(cadena, numero, verdadedo_falso, cualquiera, lenguajes, years);


//ambos
let cadena2: string | number = "1";




//let vs var

var numero1 = 10;

var numero2 = 12;

if(numero1==10){

let numero1 = 44;
var numero2 = 55;

console.log(numero1, numero2);


}
