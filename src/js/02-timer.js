// // commonjs
// const flatpickr = require("flatpickr");
// // es modules are recommended, if available, especially for typescript
import flatpickr from "flatpickr";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "flatpickr/dist/flatpickr.min.css";
require("flatpickr/dist/themes/material_red.css");


const refs = {
  timePick: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
  // timerRef: document.querySelector('.timer'),
  label: document.querySelectorAll('.label'),
}


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {

      if (selectedDates[0] < new Date()) {
          refs.btnStart.disabled = true;
          Notify.failure('Please choose a date in the future');
          return;
      }
      
    refs.btnStart.disabled = false;
    localStorage.setItem('savedTime', selectedDates[0]);
  },
  
};

const timer = {
  start() {
    const endTime = Date.parse(localStorage.getItem('savedTime'));

    setInterval(() => {
      const curTime = Date.now();
      const deltaTime = endTime - curTime;
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      refs.days.textContent = `${days}`;
      refs.hours.textContent = `${hours}`;
      refs.minutes.textContent = `${minutes}`;
      refs.seconds.textContent = `${seconds}`;
      console.log(`${days}:${hours}:${minutes}:${seconds}`);
    }, 1000);
    localStorage.removeItem('savedTime');
    refs.btnStart.disabled = true;
  }
};


const fp = new flatpickr(refs.timePick, options);

refs.btnStart.addEventListener('click', timer.start);

// refs.timerRef.style.display = 'table';
// refs.fieldRef.style.display = 'table-cell';

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

console.log(refs.label);
// refs.label.style.display = 'block';
// refs.label.style.display = 'flex';
//console.log(refs.field.firstChild.style.display);