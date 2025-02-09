const toggleSwitch = document.getElementById("themeToggle");
const themeText = document.getElementById("themeText");

// Check for saved theme preference
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleSwitch.checked = true;
    themeText.innerHTML = "Dark Mode Activated 🌙";
}

// Toggle theme on switch change
toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
        themeText.innerHTML = "Dark Mode Activated 🌙";
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
        themeText.innerHTML = "Light Mode Activated ☀️";
    }
});