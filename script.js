
const input = document.getElementById('timeCount');
const output = document.getElementById('current-time');

let timerInterval;
function startCountdown(seconds) {
  let count = Math.floor(seconds);
  output.textContent = count;
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    count--;
    output.textContent = count;

    if (count <= 0) {
      clearInterval(timerInterval);
      output.textContent = '0';
    }
  }, 1000);
}

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const seconds = parseInt(input.value);

    if (isNaN(seconds)) {
      clearInterval(timerInterval);
      output.textContent = '0';

    } else {
      startCountdown(seconds);
    }

    input.value = ''; // Clear the input field
  }
});
