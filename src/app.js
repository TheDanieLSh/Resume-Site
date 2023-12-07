console.log('viewport width ->', window.innerWidth);
console.log('viewport height ->', window.innerHeight);
var header = document.querySelector('header');
header.addEventListener('mouseover', function (e) {
    var title = document.querySelector('.work-name');
    if (e.target.classList.contains('work-list__item')) {
        title.innerHTML = e.target.dataset.name;
    }
    else {
        title.innerHTML = '';
    }
});
