var header = document.querySelector('header');
header.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('.work-list__item')) {
        var title = document.querySelector('.work-name');
        console.log(e.target.dataset.name);
        title.innerHTML = e.target.dataset.name;
    }
});
