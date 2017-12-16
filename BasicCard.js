var inquirer = require("inquirer");

function BasicCard(front, back) {
  this.front = front;
  this.back = back;
  this.printCard = function() {
    console.log("Front: " + this.front + "\nBack: " + this.back);
  };
}

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the front of the card?",
      name: "cardFront"
    },
    {
      type: "input",
      message: "What is the back of the card?",
      name: "cardBack"
    }
  ]).then(function(card) {

    var newCard = new BasicCard(card.cardFront, card.cardBack);
    newCard.printCard();
  });

// var president = new BasicCard("Who was the first president of the United States?", "George Washington");
//
// president.printCard();
