// extract div.stage from DOM
const stageElement = document.querySelector('.stage');
let stageAppearances = 0;
let stageLine = 0;

// bind event for mouseover
stageElement.addEventListener('mouseover', () => {
  const message = 'Mouseul este pe scena.';

  displayMessage(message);
  displayCount(`Mouseul a fost pe scena de ${++stageAppearances}.`);
  displayParagraph(`Mouse-ul a trecut peste linie de ${++stageLine} ori.`);
});

// bind event for mouseout
stageElement.addEventListener('mouseout', () => {
  const message = 'Mouseul nu este pe scena.';

  displayMessage(message);
  displayParagraph(`Mouse-ul a trecut peste linie de ${++stageLine} ori.`);
});

// extract paragraph from DOM
let messageElement = document.querySelector('.message');

// hoisting: function to display message
function displayMessage(message = '') {
  // check if paragraph is there
  if (messageElement === null) {
    messageElement = document.createElement('p');
    messageElement.classList.add('message');
    messageElement.innerText = message;

    document.body.append(messageElement);

    return;
  }

  // write to paragraph
  messageElement.innerText = message;
}

let counterElement = document.querySelector('.counter');

// do not copy code like this
function displayCount(message = '') {
  if (counterElement === null) {
    counterElement = document.createElement('p');
    counterElement.classList.add('counter');
    counterElement.innerText = message;

    document.body.append(counterElement);

    return;
  }

  counterElement.innerText = message;
}

let countLine = document.querySelector('.counterLine');

function displayParagraph(message = '') {
  if (countLine === null) {
    countLine = document.createElement('p');
    countLine.classList.add('.counterLine');
    countLine.innerText = message;

    document.body.append(countLine);

    return;
  }

  countLine.innerText = message;
}
