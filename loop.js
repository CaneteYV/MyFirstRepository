 const num = document.getElementById('numInput');
const numInputBtn = document.getElementById('count');
const resultDiv = document.getElementById('countResult');
const clearBtn = document.getElementById('ClearCount');

numInputBtn.addEventListener('click', () => {
    const n = Number(num.value);
    if (isNaN(n) || n < 1 || n>1000) {
        console.error('Please enter a valid positive number.');
        // ageResult.textContent = 'Please enter a valid number for number.';
        // ageResult.style.color = 'crimson';
        return;
    }
    let output = '';
    for (let i = 1; i <= n; i++) {
        output += `Counting:  ${i}\n` ;
    }
    countResult.style.color = 'green'
    countResult.textContent = output;
});