const CARD_ARRAY = [
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    }
]

let choosenCard = [];
let cardIds = [];
let cardsWon = [];

CARD_ARRAY.sort(() => Math.random() - 0.5);
const gridDisplay = document.querySelector("#grid");
const results = document.querySelector("#result");

function createBoard(){
    for(let i = 0; i < CARD_ARRAY.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', `images/blank.png`);
        card.setAttribute("data-id" ,i);
        card.addEventListener('click',(flipCard));
        gridDisplay.appendChild(card);
    }
}

createBoard();

function flipCard(){
    let cardId = this.getAttribute('data-id');

    choosenCard.push(CARD_ARRAY[cardId]);
    cardIds.push(cardId);
    this.setAttribute('src',CARD_ARRAY[cardId].img);

    if(choosenCard.length === 2){
        setTimeout(checkMatch,500);
    }
}
function resertArrays(){
    choosenCard = [];
    cardIds = [];
}
function checkMatch(){
    let card = document.querySelectorAll("#grid img");
    firstCard = card[cardIds[0]];
    secondCard = card[cardIds[1]];

    if(firstCard !== secondCard){
        if(choosenCard[0].name === choosenCard[1].name){
            cardsWon.push(choosenCard);
            results.innerText = 'Cards Wons: ' + cardsWon.length;
            firstCard.style.visibility = "hidden";
            secondCard.style.visibility = "hidden";
            firstCard.removeEventListener('click',flipCard);
            alert("You found a match!");
            resertArrays();
        }
        else if(choosenCard[0].name !== choosenCard[1].name){
            alert("Try again!");
            firstCard.setAttribute('src', "images/blank.png");
            secondCard.setAttribute('src', "images/blank.png");
            resertArrays();
        }
        else{
            console.log("somthing went wrong!");
        }
    }else{
        alert("You clicked on same card!");
        resertArrays();
    }
    if(cardsWon.length === CARD_ARRAY.length/2){
        alert("You won the game!");
    }
}