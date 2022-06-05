// // commonjs
// const flatpickr = require("flatpickr");
// // es modules are recommended, if available, especially for typescript
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    timePick: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('button[data-start]'),
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      //console.log(selectedDates[0]);
      // const curDate = this.defaultDate;
      // console.log("def",this.defaultDate);
      if (selectedDates[0] < new Date()) {
          refs.btnStart.disabled = true;
          window.alert("Please choose a date in the future");
          return;
      }
    refs.btnStart.disabled = false;
    return selectedDates[0];
  },
};

const timer = {
  start() {
    const curTime = options.defaultDate;
    //const selectedTime;
      //const timeToCount = selectedTime - curTime;
    setInterval(() => {
      console.log(convertMs(curTime), "133");
    }, 1000);
     // return console.log(convertMs(curTime), "133");
  }
};

timer.start();
const flat = new flatpickr(refs.timePick, options);

refs.btnStart.addEventListener('click', convertMs);

// const timeChangeId = setInterval(() => {
//     //document.querySelector('span[data-days]').textContent -= 1;
//  }, 1000);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}