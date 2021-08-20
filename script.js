burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
leftnav = document.querySelector('.left-resp')
rightnav = document.querySelector('.right-resp')

burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('right-resp');
    leftnav.classList.toggle('left-resp');
    navbar.classList.toggle('nav-resp');
})
