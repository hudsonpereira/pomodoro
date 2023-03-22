let minutesElement,
  secondsElement,
  startButtonElement,
  stopButtonElement,
  interval,
  originalPageTitle;

let counter = 20 * 60;

window.onload = () => {
  minutesElement = $("#counter span");
  secondsElement = $("#counter span:nth-child(3)");
  startButtonElement = $("#start");
  stopButtonElement = $("#stop");
  originalPageTitle = document.title;

  startButtonElement.addEventListener("click", () => {
    startTimer();
  });

  stopButtonElement.addEventListener("click", () => {
    stopTimer();
  });

  printCounter();
};

const padNumber = (number) => {
  if (number < 10) {
    return "0" + number;
  }

  return number;
};

const printCounter = () => {
  const minutes = padNumber(Math.floor(counter / 60));
  const seconds = padNumber(Math.floor(counter % 60));

  if (interval) {
    document.title = minutes + ":" + seconds;
  }

  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = seconds;
};

const startTimer = () => {
  startButtonElement.disabled = true;
  stopButtonElement.disabled = false;

  if (counter <= 0) {
    counter = 20 * 60;
    printCounter();
  }

  if (interval === null || interval === undefined)
    interval = setInterval(() => {
      counter--;
      printCounter();

      if (counter <= 0) {
        ding();
        stopTimer();
      }
    }, 1000);
};

const stopTimer = () => {
  clearInterval(interval);
  interval = null;

  startButtonElement.disabled = false;
  stopButtonElement.disabled = true;
  document.title = originalPageTitle;
};

const ding = () => {
  var audio = new Audio("OOT_Fanfare_SmallItem.wav");
  audio.play();
};

const $ = (selector) => document.querySelector(selector);
