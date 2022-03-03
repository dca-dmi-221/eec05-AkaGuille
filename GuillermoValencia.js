'use strict'


function sayHi(){
    console.log("Hi, I am Guillermo");
}
sayHi();

console.log("--------------------------------------");
console.log("");

/*Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/

console.log("EXERCISE #1");

let testWord = "esternocleidomastoideo";
function wordCutter(word) {
    word = word.split("");
    let disorganizedWord = word.sort(function() {return Math.random() -1});
    disorganizedWord = disorganizedWord.join("");
    for (let i = 0; i < disorganizedWord.length; i++) {
        console.log(disorganizedWord.charAt(i)); 
    }
}
wordCutter(testWord);

/*Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/

console.log("");
console.log("--------------------------------------");
console.log("EXERCISE #2");

let testTargetWordA = "Sabrosura";
let testTargetWordB = "Sazón";
let testTargetWordC = "Tempurado";
let testWordsList = [
    "Sabr0sura",
    "Gozadera",
    "ritmo",
    "TEMPURADO",
    "SAZON",
    "Chevere",
    "Meneo",
];

// pruebe para cada palabra A, B y C
function wordSearcherIgnoreCase(targetWord, wordsList) {
   
}




/*Dado un arreglo de strings, retornar la palabra más larga,
la más corta y el tamaño promedio, el arreglo debe ser
entregado por parámetro y puede variar en cantidad de palabras
del arreglo de entrada libremente, debe retornar un objeto
con los valores mencionados*/

console.log("");
console.log("--------------------------------------");
console.log("EXERCISE #3");

let testSampleList = [
    "Capitan",
    "Comandante",
    "Teniente",
    "Cabo",
    "Brigadier",
    "Coronel",
    "Zar",
];

function wordLengthClassifier(wordsList) {
    let largestWord = wordsList[i];
    let smallestWord = wordsList[i];

    for (let i = 0; i < wordsList.length; i++) {
        const element = array[i];
        
    }
}




/*Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/

console.log("");
console.log("--------------------------------------");
console.log("EXERCISE #4");

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindromeVerifier(word) {
    let palindromeWord = word.toLowerCase().split("").reverse().join("");
   if ( palindromeWord === word.toLowerCase() ) {
       console.log("The word " + word + " is palindrome")
   }else{
        console.log("The word " + word + " is not palindrome")
   }
}
palindromeVerifier(onVerificationWordA);
palindromeVerifier(onVerificationWordB);
palindromeVerifier(onVerificationWordC);
palindromeVerifier(onVerificationWordD);


/*Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/

console.log("");
console.log("--------------------------------------");
console.log("EXERCISE #5");

let containerTestObject = {
    list:["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
}
function lettersCounter(objectContainer) {
    let bodyPartsList = objectContainer.list;
    let countVowels = 0;
    let countConsonants = 0;
    bodyPartsList.forEach(wordOfTheList=>{
        wordOfTheList.split("").forEach(eachLetter=>{
            if( eachLetter === "a" || eachLetter==="e" || eachLetter==="i" || eachLetter === "o" || eachLetter === "u"
            || eachLetter === "A" || eachLetter === "E" || eachLetter === "I" || eachLetter === "O" || eachLetter === "U"  ) {
                countVowels++;
             }
            else{
                countConsonants++;
            }
        })
    })
    console.log("The total number of vowels is " + countVowels +" and the total number of consonants is" + countConsonants);
 }
 lettersCounter(containerTestObject);



/*Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/

console.log("");
console.log("--------------------------------------");
console.log("EXERCISE #6");

let wordArrayA = ["hola", "¿" ,"cómo", "estás", "?"];
let wordArrayB = ["te", "ves" ,"igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {
    const joinArrays = listA.concat(listB);
    console.log(joinArrays);
}
arrayJoiner(wordArrayA,wordArrayB);


/*Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/

console.log("");
console.log("--------------------------------------");
console.log("EXERCISE #7");

let testWordToExplore = "amar";
let wordsToVerify = ["amar", "arma", "rana" , "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(wordToExplore, listOfWords) {
   
}

/*Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/

console.log("");
console.log("--------------------------------------");
console.log("EXERCISE #8");

let testObjMultiContainer = {
    listA : ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
    listB : ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
};

function vocalsRemoverFromObject(objectMultiContainer) {
 
}

/*Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/

console.log("");
console.log("--------------------------------------");
console.log("EXERCISE #9");

let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"];

function lastVocalReplacer(words) {
    // :)
}


/*Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/

console.log("");
console.log("--------------------------------------");
console.log("EXERCISE #10");

let testListA = ["amor", "sabor", "calor","firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {
    
}
