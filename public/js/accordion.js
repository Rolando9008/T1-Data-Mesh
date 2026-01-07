export function initAccordion() {
  const accordions = document.querySelectorAll(".accordion");
  accordions.forEach((accordion) => {
    const items = accordion.querySelectorAll(".accordion__item");
    items.forEach((item) => {
      const button = item.querySelector(".accordion__button");
      const panel = item.querySelector(".accordion__panel");
      if (!button || !panel) return;
      button.addEventListener("click", () => {
        const isOpen = button.getAttribute("aria-expanded") === "true";
        // Toggle aria-expanded for accessibility
        button.setAttribute("aria-expanded", String(!isOpen));
        // Show or hide the panel
        panel.hidden = isOpen;
        // Rotate the chevron icon by toggling a class
        item.classList.toggle("accordion__item--open", !isOpen);
      });
    });
  });
}
