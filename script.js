let drawnNumbers = [];

function selectNumber() {
    if (drawnNumbers.length < 75) {
        let number = Math.floor(Math.random() * 75) + 1;
        while (drawnNumbers.includes(number)) {
            number = Math.floor(Math.random() * 75) + 1;
        }
        drawnNumbers.push(number);
        displayDrawnNumber(number);
    } else {
        console.log('All numbers have been drawn.');
    }
}

function displayDrawnNumber(number) {
    const displayArea = document.getElementById('drawnNumbers');
    const numberElement = document.createElement('div');
    numberElement.textContent = 'Drawn Number: ' + number;
    displayArea.appendChild(numberElement);
}

// Call selectNumber() whenever you want to draw a new number. For example:
// selectNumber();
