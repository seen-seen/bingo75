<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <title>BINGO 抽號機</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="app-container">
        <h1>BINGO 抽號機</h1>
        
        <div class="current-display">
            <span id="luckyNumber">--</span>
        </div>

        <div class="controls">
            <button id="drawBtn">抽下一個號碼</button>
            <button id="resetBtn" class="reset">重新開始</button>
        </div>

        <p class="status">剩餘數字：<span id="remainingCount">75</span></p>

        <hr>

        <div class="bingo-grid" id="numberGrid"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
