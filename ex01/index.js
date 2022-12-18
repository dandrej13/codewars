//document.getElementById("count-el").innerText = 5

let firstBatch = 5;
let secondBatch = 7;

let count = 5;
count += firstBatch + secondBatch;
console.log(count);


let myAge = 24;
let humanDogRatio = 7;
let myDogAge = myAge * humanDogRatio;



let bonusPoints = 50;
bonusPoints = 25;
bonusPoints = 70;

let lapsCompleted = 0;
function increment() {
    lapsCompleted = ++lapsCompleted
    console.log(lapsCompleted);
}

increment();
increment();
increment();

count = 0;
let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("entry")
let sumEl = document.getElementById("sum")
function incrementPeople() {
    count = ++count;
    countEL.innerHTML = count
    let myArr = [count]
    myArr.forEach(element => {
        console.log(element);
    });
}


function save() {
    console.log(count);
    saveEl.innerHTML += " * " + count;

    count = 0;
    countEL.innerHTML = count;
}


