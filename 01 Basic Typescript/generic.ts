// function identify(arg:string) :string{
//     return ""
// }
// identify("")

function generic<Type>(arg: Type): Type{
    return arg 
}

generic<string>("")
generic<number>(5)
generic<boolean>(false)

// Type of array 
function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}
// Type of array
function loggingIdentity1<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}