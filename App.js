function randomNumber() {
    var randomNumber1 = Math.random() * 6 + 1;
    return Math.floor(randomNumber1);
}

function ifLogic(randomNumber1, diceClass) {
    // Accessing the correct dice element by its class
    var image = document.getElementsByClassName(diceClass)[0];
    
    if (randomNumber1 === 1) {
        image.setAttribute("src", "images/dice1.png");
    } else if (randomNumber1 === 2) {
        image.setAttribute("src", "images/dice2.png");
    } else if (randomNumber1 === 3) {
        image.setAttribute("src", "images/dice3.png");
    } else if (randomNumber1 === 4) {
        image.setAttribute("src", "images/dice4.png");
    } else if (randomNumber1 === 5) {
        image.setAttribute("src", "images/dice5.png");
    } else if (randomNumber1 === 6) {
        image.setAttribute("src", "images/dice6.png");
    }
}

// Generate random numbers for both dice
var randomNum1 = randomNumber();
var randomNum2 = randomNumber();

// Update both dice images by passing the class names
ifLogic(randomNum1, "img1");
ifLogic(randomNum2, "img2");

function winnerLogic(randomNum1, randomNum2) {
    
    var h2Element = document.getElementsByTagName("h2")[0];

    if (randomNum1 > randomNum2) {
        h2Element.innerHTML = "Player 1 Wins!";
    } else if (randomNum1 < randomNum2) {
        h2Element.innerHTML = "Player 2 Wins!";
    } else {
        h2Element.innerHTML = "It's a Tie! Try again";
    }
}


winnerLogic(randomNum1, randomNum2);





    
    