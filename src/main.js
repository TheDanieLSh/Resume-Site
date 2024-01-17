console.log('viewport width ->', window.innerWidth);
console.log('viewport height ->', window.innerHeight);

new fullpage('#fullpage', {
    scrollHorizontally: true,
    scrollingSpeed: 900,
    navigation: true,
    navigationTooltips: ['Главная', 'Подробная информация', 'Мои работы'],
    scrollOverflow: false, //!!!!
    loopBottom: true,
    loopTop: true,
});

const workData = {
    'animerai': {
        'name': ''
    }
}

const works = document.querySelector('.works');
works.addEventListener('mouseover', e => {
    const title = document.querySelector('.work-name');
    if (e.target.classList.contains('work-list__item')) {
        title.innerHTML = e.target.dataset.name;
    }
    else {
        title.innerHTML = '';
    }
});
works.addEventListener('click', e => {
    if (e.target.classList.contains('work-list__item')) {
        e.target.classList.add('works__popup', 'works__active');
        e.target.classList.remove('work-list__item');
        document.querySelector('.layer').style.display = 'block';
        e.target.innerHTML = '<p>' + e.target.dataset.description + '</p>' + '<p>' + e.target.dataset.link + '</p>' + '<p>' + e.target.dataset.git + '</p>';
    }
    if (!e.target.classList.contains('work-list__item')) {
        works.querySelector('.works__active').classList.add('work-list__item');
        works.querySelector('.works__active').classList.remove('works__popup', 'works__active');
    }
})

function moveToInfo() {
    fullpage_api.moveTo(2);
}
function moveToWorks() {
    fullpage_api.moveTo(3);
}
