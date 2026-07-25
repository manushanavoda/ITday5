
console.log("Hello java script :");

let name ="Manusha";

let age = 23;

console.log(name);
console.log(age);

let aaa = "manusha "
let isafterAL = true;
let customers = [];
let customer = {};

console.log(typeof customer)
console.log(typeof customers)
console.log(typeof aaa)

let x =10;
let y ="10";
console.log(x==y);
//true

console.log(x===y);
//false

let z = 10;
let s = 20;

if(z>s) {
    console.log("Z is greater than S");
} else if(z<s){
    console.log("Z is less than S");
}else{
    console.log("Z is equel to S");
}

let day =2;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesdeay");
        break;
    default:
        console.log("Invalid day");
}

for (let i =0; i< 10; i++){
    console.log(i);
}

let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

let b =0;
do{
    console.log(b);
    b++;
}while(b < 10);