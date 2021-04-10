const navToggle = document.querySelector('.nav-toggle');
const navToggleIcon = document.querySelector('.fa-bars');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    if(navToggleIcon.classList.contains('fa-bars')) {
        navToggleIcon.className = "fas fa-times";
        navToggle.style.backgroundColor = "#212121";
    } else {
        navToggleIcon.className = "fas fa-bars";
        navToggle.style.backgroundColor = "#323232";
    }
    
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        navToggleIcon.className = "fas fa-bars";
        navToggle.style.backgroundColor = "#323232";
    })
})
