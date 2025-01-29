const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const display = document.getElementById('display');
let startTime;
let elapsedTime = 0;
let timerInterval;

function formatTime(time) {
	let hours = Math.floor(time / 3600000);
	let minutes = Math.floor((time % 3600000) / 60000);
	let seconds = Math.floor((time % 60000) / 1000);
	let milliseconds = Math.floor((time % 1000) / 10);

	return (
		String(hours).padStart(2, '0') +
		':' +
		String(minutes).padStart(2, '0') +
		':' +
		String(seconds).padStart(2, '0') +
		'.' +
		String(milliseconds).padStart(2, '0')
	);
}

function startTimer() {
	startTime = Date.now() - elapsedTime;
	timerInterval = setInterval(function () {
		elapsedTime = Date.now() - startTime;
		display.textContent = formatTime(elapsedTime);
	}, 10);
}

function stopTimer() {
	clearInterval(timerInterval);
}

function resetTimer() {
	clearInterval(timerInterval);
	elapsedTime = 0;
	display.textContent = '00:00:00';
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
