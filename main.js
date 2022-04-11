const icon = document.querySelector('.ic');


icon.addEventListener('click', function(){
    const links = document.querySelector('.links')
    links.classList.toggle('change-links')
});


const btn = document.getElementById('btn')

window.onscroll = () => scrollFunction();

const scrollFunction = () => {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = 'block'
    } else {
        btn.style.display = 'none'
    }
}

btn.addEventListener('click', () => window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
}))