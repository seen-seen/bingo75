// BINGO Game

class Bingo {
    constructor() {
        this.numbers = this.generateNumbers();
        this.grid = this.createGrid();
        this.drawnNumbers = [];
    }

    generateNumbers() {
        return Array.from({ length: 75 }, (_, i) => i + 1);
    }

    createGrid() {
        const grid = [];
        for (let i = 0; i < 5; i++) {
            grid.push([]);
            for (let j = 0; j < 5; j++) {
                const index = Math.floor(Math.random() * this.numbers.length);
                grid[i].push(this.numbers.splice(index, 1)[0]);
            }
        }
        return grid;
    }

    drawNumber() {
        if (this.numbers.length === 0) {
            alert('All numbers have been drawn!');
            return;
        }
        const index = Math.floor(Math.random() * this.numbers.length);
        const drawnNumber = this.numbers.splice(index, 1)[0];
        this.drawnNumbers.push(drawnNumber);
        return drawnNumber;
    }

    resetGame() {
        this.numbers = this.generateNumbers();
        this.grid = this.createGrid();
        this.drawnNumbers = [];
    }
}

const bingo = new Bingo();

function renderGrid() {
    const gridContainer = document.getElementById('bingo-grid');
    gridContainer.innerHTML = '';
    bingo.grid.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'bingo-row';
        row.forEach(num => {
            const numDiv = document.createElement('div');
            numDiv.className = 'bingo-cell';
            numDiv.innerText = num;
            rowDiv.appendChild(numDiv);
        });
        gridContainer.appendChild(rowDiv);
    });
}

function draw() {
    const drawnNumber = bingo.drawNumber();
    if (drawnNumber) {
        alert('Drawn Number: ' + drawnNumber);
    }
}

function reset() {
    bingo.resetGame();
    renderGrid();
}

document.getElementById('draw-button').addEventListener('click', draw);
document.getElementById('reset-button').addEventListener('click', reset);

// Initial rendering
renderGrid();