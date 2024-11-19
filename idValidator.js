/**
 * 驗證台灣身分證字號
 * @param {string} id - 身分證字號
 * @returns {boolean} - 是否為有效身分證字號
 */
function validateTaiwanID(id) {
    // 基本格式檢查：長度為10且第一碼為英文字母
    if (!id || id.length !== 10 || !/^[A-Z][12]\d{8}$/.test(id)) {
        return false;
    }

    // 英文字母對應的數字表
    const letterMap = {
        'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14,
        'F': 15, 'G': 16, 'H': 17, 'I': 34, 'J': 18,
        'K': 19, 'L': 20, 'M': 21, 'N': 22, 'O': 35,
        'P': 23, 'Q': 24, 'R': 25, 'S': 26, 'T': 27,
        'U': 28, 'V': 29, 'W': 32, 'X': 30, 'Y': 31,
        'Z': 33
    };

    // 取得第一個字母對應的數字
    const firstNumber = letterMap[id[0]];
    const n1 = Math.floor(firstNumber / 10);
    const n2 = firstNumber % 10;

    // 計算檢查碼
    const multipliers = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let sum = n1 * multipliers[0] + n2 * multipliers[1];

    for (let i = 2; i < multipliers.length; i++) {
        sum += parseInt(id[i - 1]) * multipliers[i];
    }

    return sum % 10 === 0;
}

// 使用範例
console.log(validateTaiwanID('A123456789')); // 測試一個身分證字號 