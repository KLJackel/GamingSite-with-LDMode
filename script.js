function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelectorAll("h1, h2, h3,p,.news-item").forEach(element => {
        element.classList.toggle("dark-mode");
    });
    const toggleIcon = document.getElementById("darkModeToggle");
    const ldmLabel = document.getElementById("ldmLabel");
    if (document.body.classList.contains("dark-mode")) {
        toggleIcon.src = "./imgs/toggle_on_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
        ldmLabel.textContent = "Light Mode";
    } else {
        toggleIcon.src = "./imgs/toggle_off_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
        ldmLabel.textContent = "Dark Mode";

    }
};
