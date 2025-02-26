// script.js
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("toggle-theme");
    const toggleTheme = () => {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkMode);
        button.textContent = isDarkMode ? "Desactivar Modo Oscuro" : "Activar Modo Oscuro";
    };
    
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
    
    button.addEventListener("click", toggleTheme);
});
