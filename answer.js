// *** YOUR ANSWER BELOW ***

let inputA = 9;
let inputB = 4;

function quotient(inputA, inputB){
    let answer = Math.floor(inputA / inputB);
    let remainder = Math.floor(inputA % inputB);
    return answer + " " + "r" + remainder;
}

console.log(quotient(9,4));