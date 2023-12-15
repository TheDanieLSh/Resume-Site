"use strict";
console.log('viewport width ->', window.innerWidth);
console.log('viewport height ->', window.innerHeight);
// type fpType = (id: string, {
//     autoScrollingType: boolean,
//     scrollHorizontallyType: boolean
// })
new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true
});
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
