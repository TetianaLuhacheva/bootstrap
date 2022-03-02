let firstname: string = "Teti";
let monage: number = 30;


// JS
function jsAdd(a, b){
    return a + b;
}

console.log(jsAdd(1,4));


// TS
function tsAdd(a: number, b: number) : number {
    return a + b;
}

console.log(tsAdd(1,5));


// TS void

function setHello() : void { 
}
 

// TS undefined

let job : undefined ;

let animal : string = 'fish';
let animalArray: string[] = ['fish', 'shark', 'horse'];
let count : number = 5 ;
let сщгтеArray: number[] = [1, 4, 99];

let condition : boolean = true;
let conditionArray : boolean[] = [true, false, true, true];
 
function sayHello(...args: []): void{
    console.log("Everybody want to rule the world");
}
 
sayHello();