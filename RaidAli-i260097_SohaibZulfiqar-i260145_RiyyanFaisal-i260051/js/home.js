/* Find the time remaining until New Year Fest 27 begins. */
function updateCountdown() {
    var newYearFestDate = new Date("January 1, 2027 00:00:00").getTime();
    var currentDate = new Date().getTime();
    var timeRemaining = newYearFestDate - currentDate;
    var days = document.getElementById("days");
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var countdownGrid = document.getElementById("countdown-grid");
    var countdownMessage = document.getElementById("countdown-message");
    var dayValue;
    var hourValue;
    var minuteValue;
    var secondValue;

    if (timeRemaining <= 0) {
        countdownGrid.classList.add("d-none");
        countdownMessage.classList.remove("d-none");
        return;
    }

    dayValue = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    hourValue = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    minuteValue = Math.floor((timeRemaining / (1000 * 60)) % 60);
    secondValue = Math.floor((timeRemaining / 1000) % 60);

    days.textContent = dayValue;
    hours.textContent = hourValue;
    minutes.textContent = minuteValue;
    seconds.textContent = secondValue;
}

/* Start the countdown as soon as the home page is ready. */
document.addEventListener("DOMContentLoaded", function () {
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
