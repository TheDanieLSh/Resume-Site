"use strict";
console.log('viewport width ->', window.innerWidth);
console.log('viewport height ->', window.innerHeight);
$('#pagepiling').pagepiling();
const works = document.querySelector('.works');
works.addEventListener('mouseover', (e) => {
    const title = document.querySelector('.work-name');
    if (e.target.classList.contains('work-list__item')) {
        title.innerHTML = e.target.dataset.name;
    }
    else {
        title.innerHTML = '';
    }
});
