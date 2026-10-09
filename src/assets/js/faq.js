const faqButtons = Array.from(document.querySelectorAll(".cs-faq-item .cs-button"));
for (const button of faqButtons) {
    button.addEventListener("click", () => {
        const item = button.closest(".cs-faq-item");
        const isOpen = item.classList.toggle("active");
        button.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
}
