document.addEventListener("DOMContentLoaded", () => {
    const panels = document.querySelectorAll(".panel");
    const popups = document.querySelectorAll(".popup");
    const closeButtons = document.querySelectorAll(".close");

    panels.forEach(panel => {
        panel.addEventListener("click", () => {
            const target = panel.getAttribute("data-target");
            const popup = document.getElementById(target);
            if (popup) {
                popup.style.display = "flex";
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const popup = button.closest(".popup");
            if (popup) {
                popup.style.display = "none";
            }
        });
    });

    // Optional: Close popup when clicking outside content
    popups.forEach(popup => {
        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                popup.style.display = "none";
            }
        });
    });
});
