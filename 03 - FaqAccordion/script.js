const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach((item) =>
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  }),
);
