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

      if (selectedDates[0] < new Date()) {
          refs.btnStart.disabled = true;
          window.alert("Please choose a date in the future");
          return;
      }
    refs.btnStart.disabled = false;
    localStorage.setItem('savedTime', selectedDates[0]);
  },
  
};

const timer = {
  start() {
    const curTime = Date.parse(localStorage.getItem('savedTime'));

    setInterval(() => {
      const timeDec = Date.now();
      const deltaTime = curTime - timeDec;
      const timeComp = convertMs(deltaTime);
      console.log(`${curTime} - ${timeDec} = `,timeComp);
    }, 1000);
     // return console.log(convertMs(curTime), "133");
  }
};


const fp = new flatpickr(refs.timePick, options);

refs.btnStart.addEventListener('click', timer.start);


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}