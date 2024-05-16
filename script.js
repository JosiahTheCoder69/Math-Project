// Add JavaScript code to make the game functional
const answerInput = document.getElementById('answer');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

submitBtn.addEventListener('click', checkAnswer);

function checkAnswer() {
    const userAnswer = parseInt(answerInput.value);
    const correctAnswer = 2 + 3; // Calculate the correct answer
    if (userAnswer === correctAnswer) {
        resultDiv.innerHTML = 'Correct!';
    } else {
        resultDiv.innerHTML = 'Try again!';
    }
}