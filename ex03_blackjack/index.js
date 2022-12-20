let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let bjEl = document.getElementById("bj");
let opt1El = document.getElementById("option1");
let opt2El = document.getElementById("option2");
let opt3El = document.getElementById("option3");
let tryAgain = document.getElementById("tryAgain");
let s = document.getElementById("s");
let c = document.getElementById("c");
let endSum = document.getElementById("endSum");
let result = document.getElementById("result");
let dSumEL = document.getElementById("dealer");
let newSum = 0;
let userSum = 0;

function startGame() {
    let userFirstCard = Math.floor(Math.random() * 10 + 2);
    let userSecondCard = Math.floor(Math.random() * 10 + 2);
    userSum = userFirstCard + userSecondCard;
    if (userSum > 21 && userFirstCard === 11) {
        userFirstCard = 1;
        userSum = userFirstCard + userSecondCard
    }
    if (userSum > 21 && userSecondCard === 11) {
        userSecondCard = 1;
        userSum = userFirstCard + userSecondCard

    }
    let hasBlackJack = false;
    let isAlive = true;
    let message;

    tryAgain.style.display = "none";
    endSum.style.display = "none";
    result.style.display = "none";
    dSumEL.style.display = "none";
    opt1El.style.display = "inline";
    opt2El.style.display = "inline";
    opt3El.style.display = "inline";
    s.style.display = "block";
    c.style.display = "block";
    cardsEl.style.display = "block";
    sumEl.style.display = "block";




    opt1El.textContent = "HIT";
    opt2El.textContent = "STAND";
    opt3El.textContent = "CHECK RESULT";
    opt3El.style.background = "black"
    opt3El.style.color = "white"
    bjEl.style.color = "goldenrod";
    bjEl.textContent = "Blackjack"
    if (userSum < 21) {

        message = "DO YOU WANT ANOTHER CARD ";

    } else if (userSum === 21 &&
        ((userFirstCard === 11 && userSecondCard === 10) ||
            (userFirstCard === 10 && userSecondCard === 11))) {
        message = "BLACKJACK";
        hasBlackJack = true;
        bjEl.style.color = "red";
        bjEl.textContent = "!!! BLACKJACK !!!"


    } else if (userSum === 21 &&
        ((userFirstCard !== 11 && userSecondCard !== 10) ||
            (userFirstCard !== 10 && userSecondCard !== 11))) {
        message = "NO MORE DRAWS";

    }
    else if (userSum > 21) {
        message = "BUST";
        isAlive = false;
    }

    console.log(userSum);
    console.log(userFirstCard);
    console.log(userSecondCard);
    console.log(message);
    cardsEl.textContent = userFirstCard + " " + userSecondCard
    sumEl.textContent = userSum
    newSum = 0;


}

function drawCard() {
    let newCard = Math.floor(Math.random() * 10 + 2);

    cardsEl.textContent += " " + newCard
    newSum = sumEl.textContent = Number(+sumEl.textContent + newCard);
    if (newSum > 21) {
        opt1El.style.display = "none";
        opt2El.style.display = "none";
        opt3El.style.display = "none";
        tryAgain.style.display = "inline";
        tryAgain.style.color = "red";
        tryAgain.textContent = "YOU BUSTED";

    }
}

function stand() {
    cardsEl.style.display = "none";
    sumEl.style.display = "none";
    opt1El.style.display = "none";
    opt2El.style.display = "none";
    s.style.display = "none";
    c.style.display = "none";
    endSum.style.display = "inline"
    endSum.textContent = "Your count is : " + sumEl.innerText
    endSum.style.margin = "80px 4%";
    endSum.style.textAlign = "left"
}
///dealer
function fker() {
    let dealerSum = Math.floor(Math.random() * 9 + 17);
    console.log(dealerSum);
    let b = "Dealer Bust, You Win!"
    let w = "You win!"
    let d = "Push!"
    let l = "Dealer Wins."




    if (dealerSum > 21) {
        result.textContent = b;
    } else if (dealerSum === newSum || dealerSum === userSum) {
        result.textContent = d;
    } else if ((dealerSum > newSum && dealerSum < 22) && (dealerSum > userSum && dealerSum < 22)) {
        result.textContent = l;
    } else if (dealerSum < newSum || dealerSum < userSum) {
        result.textContent = w;
    }

    result.style.display = "block";

    dSumEL.style.display = "inline";
    dSumEL.innerHTML = "Dealer count is : " + dealerSum;
    dSumEL.style.margin = "80px 4%";
    dSumEL.style.textAlign = "left";

    console.log(newSum + " drawcard");
    console.log(userSum + " usersum");
}
