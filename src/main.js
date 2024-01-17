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
        'description': 'Мой главный проект. Здесь я с нуля разработал дизайн, реализовал полноценный роутинг через React Router с применением динамических параметров и поиск товаров с выпадающей строкой. Список товаров в каждом разделе загружается динамически в зависимости от своей классификации из базы данных, представляющей собой json файл. В качестве инструмента управления состоянием использовал Redux. Сайт полностью адаптивен для мобильных устройств.',
        'site-link': 'https://animerai.it-reu.ru',
        'git-link': 'https://github.com/TheDanieLSh/Resume/tree/main/Online%20store',
    },

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
        e.target.classList.add('works__active');
        document.querySelector('.layer').style.display = 'block';
        document.querySelector('.works__popup').style.display = 'block';
    } else if (document.querySelector('.works__popup').style.display == 'block') {
        if (!e.target.classList.contains('works__popup')) {
            document.querySelector('.works__popup').style.display = 'none';
            document.querySelector('.layer').style.display = 'none';
            document.querySelector('.works__active').classList.remove('works__active');
        }
    }
})

function moveToInfo() {
    fullpage_api.moveTo(2);
}
function moveToWorks() {
    fullpage_api.moveTo(3);
}
