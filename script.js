console.log('Hello from AyeshaMall Studio!');
const heading = document.querySelector('h1');
if (heading) {
    heading.addEventListener('click', () => {
        alert('Clicked!');
    });
}