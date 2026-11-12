/* Read the saved choice or use dark mode by default. */
function getSavedTheme() {
    var savedTheme = localStorage.getItem("vexon-theme");

    if (savedTheme === "light") {
        return "light";
    }

    return "dark";
}

/* Apply the selected theme and update the button label. */
function setTheme(theme) {
    var toggleButton = document.getElementById("theme-toggle");

    document.documentElement.setAttribute("data-theme", theme);

    if (theme === "dark") {
        toggleButton.textContent = "Light";
        toggleButton.setAttribute("aria-label", "Switch to light mode");
    } else {
        toggleButton.textContent = "Dark";
        toggleButton.setAttribute("aria-label", "Switch to dark mode");
    }
}

/* Switch themes and save the new choice for every page. */
function toggleTheme() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var newTheme;

    if (currentTheme === "dark") {
        newTheme = "light";
    } else {
        newTheme = "dark";
    }

    setTheme(newTheme);
    localStorage.setItem("vexon-theme", newTheme);
}

/* Start the shared theme controls after the page loads. */
document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("theme-toggle");

    setTheme(getSavedTheme());
    if (toggleButton) {
        toggleButton.addEventListener("click", toggleTheme);
    }
});
