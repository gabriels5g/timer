document.addEventListener('DOMContentLoaded', function () {
  const playButton = document.querySelector('.play');
  const pauseButton = document.querySelector('.pause');
  const stopButton = document.querySelector('.stop');
  const adjustmentButton = document.querySelector('.adjustment');
  const soundOnButton = document.querySelector('.sound-on');
  const soundOffButton = document.querySelector('.sound-off');

  const timerMinutes = document.querySelector('.timer-minutes');
  const timerSeconds = document.querySelector('.timer-seconds');

  let countdown;
  let isPaused = false;
  let timeLeft = 25 * 60;

  function updateTimerDisplay(minutes, seconds) {
    timerMinutes.textContent = String(minutes).padStart(2, '0');
    timerSeconds.textContent = String(seconds).padStart(2, '0');
  }

  function startTimer() {
    const now = Date.now();
    const then = now + timeLeft * 1000;

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft <= 0) {
        clearInterval(countdown);
        return;
      }

      const minutes = Math.floor(secondsLeft / 60);
      const seconds = secondsLeft % 60;

      updateTimerDisplay(minutes, seconds);
      timeLeft = secondsLeft;
    }, 1000);
  }

  function toggleButtons(showPlay) {
    playButton.classList.toggle('hiden', !showPlay);
    pauseButton.classList.toggle('hiden', showPlay);
    stopButton.classList.toggle('hiden', showPlay);
  }

  playButton.addEventListener('click', () => {
    toggleButtons(false);
    if (!isPaused) {
      timeLeft = parseInt(timerMinutes.textContent) * 60 + parseInt(timerSeconds.textContent);
    }
    startTimer();
  });

  pauseButton.addEventListener('click', () => {
    clearInterval(countdown);
    isPaused = true;
    toggleButtons(true);
  });

  stopButton.addEventListener('click', () => {
    clearInterval(countdown);
    isPaused = false;
    timeLeft = 25 * 60;
    updateTimerDisplay(25, 0);
    toggleButtons(true);
  });

  adjustmentButton.addEventListener('click', () => {
    // Logic to adjust timer if needed
  });

  soundOnButton.addEventListener('click', () => {
    soundOnButton.classList.add('hiden');
    soundOffButton.classList.remove('hiden');
    // Logic to turn off sound
  });

  soundOffButton.addEventListener('click', () => {
    soundOffButton.classList.add('hiden');
    soundOnButton.classList.remove('hiden');
    // Logic to turn on sound
  });
});
