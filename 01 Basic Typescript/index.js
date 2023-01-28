var aa = "Hello world";
// string, number, array, null,undefined, boolean, never, 
// any, 
function getLowercase(str) {
    return str.toLowerCase();
}
console.log(getLowercase("Hello World"));
var b = 254;
// Normal Function
function add(number1, number2) {
    return number1 + number2;
}
// Arrow Function
var substract = function (number1, number2) {
    return number1 - number2;
};
substract(34, 24);
add(3, 4);
add(54, 5);
// Array 
var arr3 = [123, 121, 'tamim'];
var arr1 = [123, 154, 134];
var arr2 = ['asr', "sfdsd",];
var id = "23";
var person = {
    name: "Tamim",
    age: 22,
    hobby: "Programming"
};
// Enum 
var Colors;
(function (Colors) {
    Colors["color1"] = "#fff";
    Colors["color2"] = "#fffa";
    Colors["color3"] = "#fffas";
})(Colors || (Colors = {}));
console.log(Colors.color1);
// Generic
