let burgerIcon = document.querySelector('.burger__icon');
let burgerMenu = document.querySelector('.burger__menu');

burgerIcon.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
})