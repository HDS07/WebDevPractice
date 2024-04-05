document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);

    const { palindromeNumbers, sum } = findPalindromeNumbersAndSum(start, end);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Palindrome numbers: ${palindromeNumbers.join(', ')}</p>
        <p>Sum of palindrome numbers: ${sum}</p>
    `;
});

function findPalindromeNumbersAndSum(start, end) {
    let sum = 0;
    let palindromeNumbers = [];

    for (let i = start; i <= end; i++) {
        if (isPalindrome(i)) {
            palindromeNumbers.push(i);
            sum += i;
        }
    }

    return { palindromeNumbers, sum };
}

function isPalindrome(num) {
    let originalNum = num;
    let reversedNum = 0;

    while (num !== 0) {
        let rem = num % 10;
        reversedNum = reversedNum * 10 + rem;
        num = Math.floor(num / 10);
    }

    return originalNum === reversedNum;
}

