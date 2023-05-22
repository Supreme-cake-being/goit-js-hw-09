import throttle from 'lodash.throttle';

const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const form = document.querySelector("form");

getFromLocalStorage();

form.addEventListener("input", throttle((e) => {
    const feedback = {
        email: input.value,
        message: textarea.value,
    };

    localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
}, 500));

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formInputOnSubmit = {
        email: input.value,
        message: textarea.value,
    }

    if (!formInputOnSubmit.email || !formInputOnSubmit.message)
        return;

    console.log(formInputOnSubmit);

    form.reset();
    localStorage.removeItem("feedback-form-state");
});

function getFromLocalStorage() {
    const feedback = JSON.parse(localStorage.getItem("feedback-form-state"));

    if (!feedback)
        return;

    input.value = feedback.email;
    textarea.value = feedback.message;

}