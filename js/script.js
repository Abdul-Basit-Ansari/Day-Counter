const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const statusMessage = document.getElementById('status-message');

const startDate = new Date('2024-05-28T00:00:00');
const endDate = new Date(startDate.getFullYear() + 2, startDate.getMonth(), startDate.getDate());

function updateCounter() {
    const currentTime = new Date();
    const timeDifference = currentTime - startDate;
    const remainingTime = endDate - currentTime;

    if (remainingTime <= 0) {
        daysElement.innerText = 0;
        hoursElement.innerText = 0;
        minutesElement.innerText = 0;
        secondsElement.innerText = 0;
        statusMessage.innerText = "The counter has ended.";
        return;
    }

    const seconds = Math.floor((remainingTime / 1000) % 60);
    const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
    const hours = Math.floor((remainingTime / 1000 / 60 / 60) % 24);
    const days = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
    const pastDays = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

    daysElement.innerText = days;
    hoursElement.innerText = hours;
    minutesElement.innerText = minutes;
    secondsElement.innerText = seconds;
    statusMessage.innerText = `${pastDays} days have passed since May 28, 2024.`;
}

setInterval(updateCounter, 1000);
updateCounter();
