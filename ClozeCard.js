var inquirer = require("inquirer");

function ClozeCard(cloze, partial, fulltext) {
  this.fulltext = fulltext;
  this.cloze = cloze;
  this.partial = partial;
  this.printCard = function() {
    console.log("Cloze: " + this.cloze + "\nPartial: " + this.partial + "\nFull Text: " + this.fulltext);
  };
}

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the cloze text of the card?",
      name: "cardCloze"
    },
    {
      type: "input",
      message: "What is the full text of the card?",
      name: "cardFull"
    }
  ]).then(function(card) {
    var cardCloze = card.cardCloze;
    var cardFull = card.cardFull;
    var partialText = cardFull.slice(cardCloze);
    console.log(partialText);

    var newCard = new ClozeCard(card.cardCloze, partialText, card.cardFull);
    newCard.printCard();
  });

// var president = new BasicCard("Who was the first president of the United States?", "George Washington");
//
// president.printCard();
