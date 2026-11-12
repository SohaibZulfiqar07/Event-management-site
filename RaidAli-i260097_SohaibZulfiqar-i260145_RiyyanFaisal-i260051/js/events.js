/* Filter event cards by their category. */
function filterEvents(category) {
    var cards = document.querySelectorAll(".event-column");
    var buttons = document.querySelectorAll(".filter-button");
    var index;
    for (index = 0; index < cards.length; index += 1) {
        if (category === "all" || cards[index].querySelector(".event-card").getAttribute("data-category") === category) {
            cards[index].classList.remove("d-none");
        } else {
            cards[index].classList.add("d-none");
        }
    }
    for (index = 0; index < buttons.length; index += 1) {
        buttons[index].classList.remove("active");
        if (buttons[index].getAttribute("data-filter") === category) {
            buttons[index].classList.add("active");
        }
    }
}
/* Connect each category button to the filter. */
document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".filter-button");
    var index;
    for (index = 0; index < buttons.length; index += 1) {
        buttons[index].addEventListener("click", function () {
            filterEvents(this.getAttribute("data-filter"));
        });
    }
});
