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
Regular Javascript Code
fucntion add(a:number, b:number){
    return a+b
}
add(20, "20") //Give error.
```

