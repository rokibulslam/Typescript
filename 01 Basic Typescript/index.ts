// Built in Type : number, string, boolean, void, undefined, null

let num; //any types
let userId: number;
let firstName: string;
let lastName: string;
let isTrue: boolean;

userId = 1233;
firstName = "Rokibul";
lastName = "Islam";
isTrue = true;

// Void 
function display(): void {
  console.log("Hi I am display");
}
display();

// Union Types 
let userIds: string | number;
userIds = 234;

function displayUserInfo(userIds: string | number) {
  console.log(userIds);
}
displayUserInfo(1234);

// Array Types 
// let userNames: string[]; 
let userNames:Array<string>

userNames = ["andi", "korim", "rahim"]

// let multipleType: (string | number)[]
let multipleType: Array<string | number>
    
multipleType=[2323, "r3"]

// Tuple Type 
// mixed data - key, value;
let user: [number, string];
user = [101, "anis"]


