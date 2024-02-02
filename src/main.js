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
    'zhish': {
        'description': 'По сути, мой первый проект, на нём я учился базе вёрстки. Простое одностраничное приложение с парой скриптов, дизайн которого, как и всех своих проектов, разработал я сам. Позже я “посадил” его на October CMS, а также реализовал php версию с забором данных из базы данных SQL для ознакомления с этими технологиями.',
        'site-link': 'https://zhish.it-reu.ru/',
        'git-link': 'https://github.com/TheDanieLSh/Resume/tree/main/Translators%20group',
    },
    'corvo': {
        'description': 'В рамках данного проекта я реализовал вылезающее боковое меню с несколькими красивыми анимациями, а также впервые использовал работу с загрузкой данных из json файла. Кроме того, здесь я использовал концепцию SPA с собственным роутингом.',
        'site-link': 'https://corvo.it-reu.ru',
        'git-link': 'https://github.com/TheDanieLSh/Resume/tree/main/SPA%20landing',
    },
    'beauty': {
        'description': 'Сайт с реализацией слайдера и собственного параллакс эффекта',
        'site-link': 'https://thebeauty.it-reu.ru',
        'git-link': 'https://github.com/TheDanieLSh/Resume/tree/main/Slider%20and%20parallax',
    },
    'kpot': {
        'description': 'Простенькая игра в духе игрового аппарата “Whack-a-mole ” на JavaScript, которую я создал ещё в колледже. Суть игры заключается в том, чтобы успеть кликнуть на крота и не промахнуться, в случае промаха будет списано очко, а в случае же удачи очко будет добавлено, а скорость смены норы кротом будет увеличена.',
        'site-link': 'https://kpot.it-reu.ru/',
        'git-link': 'https://github.com/TheDanieLSh/Resume/tree/main/KPOT',
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
works.addEventListener('click', /*async*/ e => {
    layer = document.querySelector('.layer');
    worksPopup = document.querySelector('.works__popup');
    worksActive = document.querySelector('.works__active');
    if (e.target.classList.contains('work-list__item')) {
        e.target.classList.remove('work-list__item');
        layer.style.display = 'block';
        e.target.classList.add('works__active');
        key = document.querySelector('.works__active').dataset.key;
        // await new Promise(resolve => setTimeout(resolve, 1000));
        document.querySelector('.popup__description').innerHTML = workData[key].description;
        document.querySelector('.popup__site-link').setAttribute('href', workData[key]['site-link']);
        document.querySelector('.popup__git-link').setAttribute('href', workData[key]['git-link']);
        worksPopup.style.display = 'flex';
    } else if (worksPopup.style.display == 'flex') {
        if (!e.target.classList.contains('works__popup')) {
            worksPopup.style.display = 'none';
            layer.style.display = 'none';
            worksActive.classList.remove('works__active');
            worksActive.classList.add('work-list__item');
        }
    }
})

function moveToInfo() {
    fullpage_api.moveTo(2);
}
function moveToWorks() {
    fullpage_api.moveTo(3);
}