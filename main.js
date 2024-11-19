function checkID() {
    const idInput = document.getElementById('idInput');
    const resultDiv = document.getElementById('result');
    const id = idInput.value.toUpperCase();
    
    // 清除之前的結果樣式
    resultDiv.classList.remove('valid', 'invalid');
    
    if (validateTaiwanID(id)) {
        resultDiv.textContent = '✅ 這是有效的身分證字號';
        resultDiv.classList.add('valid');
    } else {
        resultDiv.textContent = '❌ 這不是有效的身分證字號';
        resultDiv.classList.add('invalid');
    }
}

// 監聽輸入框的 Enter 鍵
document.getElementById('idInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkID();
    }
});

// 自動轉換小寫為大寫
document.getElementById('idInput').addEventListener('input', function(e) {
    this.value = this.value.toUpperCase();
}); 