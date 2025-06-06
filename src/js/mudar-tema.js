document.addEventListener('DOMContentLoaded', () => {
    const themeButtons = document.querySelectorAll('.theme-switcher img');
    const body = document.body;
    
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
    }
    
    // Add click event to theme buttons
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-theme');
            body.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    });
});