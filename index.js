const drawBtn = document.getElementById('drawBtn');
const resetBtn = document.getElementById('resetBtn');
const luckyNumText = document.getElementById('luckyNumber');
const grid = document.getElementById('numberGrid');
const countText = document.getElementById('remainingCount');

let availableNumbers = [];

// 初始化遊戲：產生 1-75 數字並建立網格
function initGame() {
    availableNumbers = Array.from({ length: 75 }, (_, i) => i + 1);
    luckyNumText.innerText = '--';
    countText.innerText = '75';
    grid.innerHTML = '';

    for (let i = 1; i <= 75; i++) {
        const div = document.createElement('div');
        div.classList.add('num-cell');
        div.id = `cell-${i}`;
        div.innerText = i;
        grid.appendChild(div);
    }
}

// 抽號邏輯
drawBtn.addEventListener('click', () => {
    if (availableNumbers.length === 0) {
        alert("所有數字已抽出！");
        return;
    }

    // 隨機選取陣列中的一個索引
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    // 將該數字從陣列中取出 (避免重複)
    const selectedNumber = availableNumbers.splice(randomIndex, 1)[0];

    // 更新顯示與網格狀態
    luckyNumText.innerText = selectedNumber;
    countText.innerText = availableNumbers.length;
    document.getElementById(`cell-${selectedNumber}`).classList.add('called');
});

// 重新開始
resetBtn.addEventListener('click', () => {
    if(confirm("確定要重設遊戲嗎？")) {
        initGame();
    }
});

// 網頁開啟時自動初始化
initGame();
