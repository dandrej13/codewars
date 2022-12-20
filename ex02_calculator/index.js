let firstName = "Andrej";

let lastName = "Dimitrievski";

let fullName = firstName + " " + lastName;
console.log(fullName);

//////////

let greeting = "Hi there";

function greets() {
    console.log(greeting + ", " + fullName);
}

greets()


//////incrementing and decrementing

let myPoints = 3

function add3Points() {
    myPoints += 3;
}

function remove1Point() {
    myPoints -= 1;
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

console.log(myPoints);

/////calculator

let num1 = Number(prompt("Enter a number"));
let num2 = Number(prompt("Enter a second number"));
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sum = document.getElementById("sum-el");


function add() {
    sum.textContent = `Sum: ${num1 + num2}`
}

function subtract() {
    sum.textContent = `Sum: ${num1 - num2}`

}

function multiply() {
    sum.textContent = `Sum: ${num1 * num2}`

}

function divide() {
    sum.textContent = `Sum: ${num1 / num2}`
}

