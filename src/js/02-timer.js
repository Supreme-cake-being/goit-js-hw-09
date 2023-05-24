// flatpickr
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// notiflix
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const input = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
const daysTimer = document.querySelector("[data-days]");
const hoursTimer = document.querySelector("[data-hours]");
const minutesTimer = document.querySelector("[data-minutes]");
const secondsTimer = document.querySelector("[data-seconds]");

startBtn.disabled = true;

const dateToday = new Date();
let inputDate = null;

Notiflix.Notify.init({    
    failure: {
        notiflixIconColor: 'white',
    }
});

const date = flatpickr(input, {
    enableTime: true,
    time_24hr: true,
    minuteIncrement: 1,

    defaultDate: dateToday,

    onClose: (selectedDates) => {
        inputDate = new Date(selectedDates[0]).getTime();

        if (dateToday.getTime() > inputDate) {
            startBtn.disabled = true;
            return Notiflix.Notify.failure('Please choose a date in the future');
        }

        startBtn.disabled = false;
    }
});

startBtn.addEventListener("click", () => {
    input.disabled = true;
    startBtn.disabled = true;

    const intervalId = setInterval(() => {
        const now = new Date().getTime();

        if (inputDate - now < 0)
            clearInterval(intervalId);
        else {
            const remainingTime = convertMs(inputDate - now);
            const { days, hours, minutes, seconds } = remainingTime;

            daysTimer.textContent = days < 10 ? `0${days}` : `${days}`;
            hoursTimer.textContent = hours < 10 ? `0${hours}` : `${hours}`;
            minutesTimer.textContent = minutes < 10 ? `0${minutes}` : `${minutes}`;
            secondsTimer.textContent = seconds < 10 ? `0${seconds}` : `${seconds}`;
        }
    }, 1000);
});

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