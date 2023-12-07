console.log('viewport width ->', window.innerWidth);
console.log('viewport height ->', window.innerHeight);

const header = document.querySelector('header') as HTMLElement;
header.addEventListener('mouseover', (e: MouseEvent) => {
    const title = document.querySelector('.work-name') as HTMLElement;
    if ((e.target as Element).classList.contains('work-list__item')) {
        title.innerHTML = (e.target as HTMLElement).dataset.name as string;
    } else {
        title.innerHTML = '';
    }
})