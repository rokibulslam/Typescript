const aa: string = "Hello world"


// string, number, array, null,undefined, boolean, never, 
// any, 

function getLowercase(str: string) {
    return str.toLowerCase()
}

console.log(getLowercase("Hello World"))


const b: number = 254;

// Normal Function
function add(number1: number, number2: number): number{
    return number1 + number2
}
// Arrow Function

const substract = (number1: number, number2: number):number => {
    return number1 - number2;
}

substract(34, 24)
add(3, 4);
add(54, 5);

// Array 
const arr1: number[] = [123, 154, 134]
const arr2: string[] = ['asr', "sfdsd",]

// create or modify type: type typename = type structure 
type myType = number | string;

const id: myType = "23"