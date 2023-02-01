interface InUser {
    id: number;
    name: string;
    age:number
}
let userss: InUser[];
let user13: InUser = {
    id: 1,
    name: "Rokibul",
    age:32
}
let user14: InUser = {
  id: 1,
  name: "Rokibul",
  age: 32,
};
let user15: InUser = {
  id: 1,
  name: "Rokibul",
  age: 32,
};

let printUserInfo: (p: InUser) => object;

printUserInfo = (params) => {
    return params;
}
printUserInfo(user13)