// notiflix
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const firstDelay = document.querySelector("input[name='delay']");
const delayStep = document.querySelector("input[name='step']");
const amount = document.querySelector("input[name='amount']");
const promiseForm = document.querySelector(".form");

Notiflix.Notify.init({  
  success: {
    notiflixIconColor: 'white',
  },

  failure: {
    notiflixIconColor: 'white',
  }
});

promiseForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let delay = 0;
  
  for (let i = 0; i < parseInt(amount.value); i += 1) {
    delay = parseInt(firstDelay.value) + i * parseInt(delayStep.value);

    createPromise(i + 1, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve)
        resolve({ position, delay });
      else
        reject({ position, delay });
    }, delay);
  });
}

