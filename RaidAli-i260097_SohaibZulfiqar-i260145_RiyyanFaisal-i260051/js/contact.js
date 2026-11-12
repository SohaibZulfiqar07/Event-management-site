/* Display one validation message under a field. */
function showError(fieldId, message) {
    document.getElementById(fieldId + "-error").textContent = message;
}
/* Check the contact form and show a success message when it is complete. */
function validateContactForm(event) {
    event.preventDefault();
    var form = document.getElementById("contact-form");
    var fields = ["name", "email", "society", "request-type", "event-title", "event-date", "message"];
    var index;
    var valid = true;
    var email;
    var chosenDate;
    var today;
    for (index = 0; index < fields.length; index += 1) {
        showError(fields[index], "");
        if (document.getElementById(fields[index]).value.trim() === "") {
            showError(fields[index], "This field is required.");
            valid = false;
        }
    }
    email = document.getElementById("email").value;
    if (email !== "" && (!email.includes("@") || !email.includes("."))) {
        showError("email", "Enter a valid email address.");
        valid = false;
    }
    chosenDate = document.getElementById("event-date").value;
    today = new Date();
    today.setHours(0, 0, 0, 0);
    if (chosenDate !== "" && new Date(chosenDate) <= today) {
        showError("event-date", "Choose a future date.");
        valid = false;
    }
    if (valid) {
        document.getElementById("success-message").textContent = "Thank you, your submission has been received.";
        form.reset();
    } else {
        document.getElementById("success-message").textContent = "";
    }
}
/* Start contact form validation after the page loads. */
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", validateContactForm);
});
