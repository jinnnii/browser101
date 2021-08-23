const find = document.querySelector('.find');
const rabbit = document.querySelector('.rabbit');

find.addEventListener('click', () => {
    rabbit.scrollIntoView({ block: 'center', behavior: 'smooth' });
});