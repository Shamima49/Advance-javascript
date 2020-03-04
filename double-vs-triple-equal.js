const first = 2;
const second = "2";

if(first == second){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}


const third = 3;
const forth = "3";

if(third === forth){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//  == check only value
// === check value & type

const fifth = 1;       // true = 1
const sixth = true;    // false = 0

if(fifth == sixth){
    console.log("condition is true");
}
else{
    console.log("condition is false");

}


const seven = 1;       // different type
const eight = true;    // string != boolean

if(seven === eight){
    console.log("condition is true");
}
else{
    console.log("condition is false");

}
