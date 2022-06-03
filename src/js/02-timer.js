// // commonjs
// const flatpickr = require("flatpickr");
9
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
      console.log(selectedDates[0]);
      //const curDate = this.defaultDate.getTime();
      console.log(this.defaultDate);
      if (selectedDates[0] < new Date()) {
          refs.btnStart.disabled = true;
          window.alert("Please choose a date in the future");
          return;
      }
      refs.btnStart.disabled = false;
  },
};

const flat = new flatpickr(refs.timePick, options);

refs.btnStart.addEventListener('click', convertMs);

timeChangeId = setInterval(() => {
    document.querySelector('span[data-days]').textContent -= 1;
 }, 1000);

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