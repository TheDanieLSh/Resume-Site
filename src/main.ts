console.log('viewport width ->', window.innerWidth);
console.log('viewport height ->', window.innerHeight);

new fullpage('#fullpage', {
	scrollHorizontally: true,
    scrollingSpeed: 900,
    navigation: true,
    navigationTooltips: ['Главная','Подробная информация','Мои работы'],
    scrollOverflow: false, //!!!!
});
const works = document.querySelector('.works') as HTMLElement;
works.addEventListener('mouseover', (e: MouseEvent) => {
    const title = document.querySelector('.work-name') as HTMLElement;
    if ((e.target as Element).classList.contains('work-list__item')) {
        title.innerHTML = (e.target as HTMLElement).dataset.name as string;
    } else {
        title.innerHTML = '';
    }
})

function moveToInfo(): void {
    fullpage_api.moveTo(2)
}
function moveToWorks(): void {
    fullpage_api.moveTo(3)
}