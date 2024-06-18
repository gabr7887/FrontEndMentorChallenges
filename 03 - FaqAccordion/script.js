const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach((item) =>
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
      item.children[0].children[1].setAttribute(
        'src',
        './assets/images/icon-plus.svg',
      );
    } else {
      item.classList.add('active');
      item.children[0].children[1].setAttribute(
        'src',
        './assets/images/icon-minus.svg',
      );
    }
  }),
);

addEventListener('keyup', (event) => {
  if (
    event.key === 'Enter' &&
    event.target.classList.contains('accordion-item')
  ) {
    if (event.target.classList.contains('active')) {
      event.target.classList.remove('active');
      event.target.children[0].children[1].setAttribute(
        'src',
        './assets/images/icon-plus.svg',
      );
    } else {
      event.target.classList.add('active');
      event.target.children[0].children[1].setAttribute(
        'src',
        './assets/images/icon-minus.svg',
      );
    }
  }
});
