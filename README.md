<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BINGO GAME EXPLANATION</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { background-color: #f8fafc; font-family: "Microsoft JhengHei", sans-serif; }
    </style>
</head>
<body className="p-6">
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-slate-100">
        <div className="bg-blue-600 p-8 text-white text-center">
            <h1 className="text-3xl font-black mb-2">🎉 BINGO 抽號機說明書</h1>
            <p className="opacity-90">歡迎來到公平、有趣的數位 BINGO 遊戲</p>
        </div>
        
        <div className="p-8 space-y-8 text-slate-700">
            <section>
                <h2 className="text-xl font-bold text-blue-600 mb-3 flex items-center gap-2">
                    <span>🌟</span> 遊戲簡介
                </h2>
                <p className="leading-relaxed">
                    這是一個專為多人聚會設計的<strong>線上同步 BINGO 抽號系統</strong>。本遊戲範圍包含數字 1 到 75，系統會確保每個號碼只被抽出一次，並即時同步給所有在線上的玩家。
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-blue-600 mb-3 flex items-center gap-2">
                    <span>🎮</span> 如何操作？
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-2">
                    <li><strong>開始遊戲：</strong>開啟網頁後，系統會自動連接雲端資料庫。</li>
                    <li><strong>抽出號碼：</strong>點擊藍色的「抽出下一個號碼」按鈕，系統會隨機產生一個新數字。</li>
                    <li><strong>查看看板：</strong>
                        <ul className="list-circle list-inside ml-6 mt-2 space-y-1 text-sm">
                            <li><span className="text-green-600 font-bold">綠色：</span>代表已經抽出的號碼。</li>
                            <li><span className="text-yellow-500 font-bold">黃色：</span>代表剛剛抽出的最新號碼。</li>
                            <li><span className="text-slate-300 font-bold">灰色：</span>代表尚未抽出的號碼。</li>
                        </ul>
                    </li>
                    <li><strong>重設遊戲：</strong>若要開始新的一局，點擊右上角的「重設遊戲」。</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-bold text-blue-600 mb-3 flex items-center gap-2">
                    <span>💡</span> 溫馨提示
                </h2>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm">
                    此遊戲為純娛樂用途，適合在班級活動、家庭聚餐或朋友聚會中使用。<strong>請保持公平競爭的運動精神</strong>，祝大家都能開心地玩 BINGO！
                </div>
            </section>
        </div>

        <div className="bg-slate-50 p-4 text-center text-xs text-slate-400 border-t border-slate-100">
            本程式由 AI 助手協作開發 • 專注於趣味與學習
        </div>
    </div>
</body>
</html>
