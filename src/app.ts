const header = document.querySelector('header') as HTMLElement;
header.addEventListener('mouseover', (e: MouseEvent) => {
    if ((e.target as Element).classList.contains('.work-list__item')) {
        const title = document.querySelector('.work-name') as HTMLElement;
        console.log((e.target as HTMLElement).dataset.name as string);
        title.innerHTML = (e.target as HTMLElement).dataset.name as string;
    }
})