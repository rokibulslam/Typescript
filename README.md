# Typescript Best Practices
### What is Typescript ?
* Types/features + Javascript = Typescript
* JS is dynamically types > let x =20
* Typescript add static typing to js > let x:number = 20
### Why Typescript ?
* Typescript check type before run time. Typescript gives error before compile the code. So we can handle error before running the program.
* Increase readability and code quality
* Intellisense IDE supprot during coding

### Example
```
Regular Javascript Code
fucntion add(a, b){
    return a+b
}
add(20, "20") //result 2020

Typescript
fucntion add(a:number, b:number){
    return a+b
}
add(20, "20") //Give error.
```

### Environment setup for Typescritp
```
npm init -y
```
Global
```
npm install -g typescript
tsc filename.ts
```
Local/dev-dependency
```
npm install -save-dev typescript
npx tsc filename.ts
```
use npx for local dependency. You can see .bin folder in node_module for dev-dependency
```
npx tsc --version
```
run Typescript and create tsconfig file
Remeber .ts file will not work in browser. ts file convert into js file
```
npx tsc init
npx tsc fileName.ts
```
Important Configuration for Typescript:
> Go to tsconfig
> baseurl => uncomment to change base url

