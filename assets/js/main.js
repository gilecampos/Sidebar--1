const btnToggle = window.document.querySelector(".navbar__toggle"); 
const inputSearch = window.document.querySelector(".navbar__search"); 
const iconSearch = window.document.querySelector(".navbar__icon-search");
const navbar = window.document.querySelector(".navbar");

//events
btnToggle.addEventListener('click', () => {
    navbar.classList.toggle('active'); 
});

inputSearch.addEventListener('click', () => {
    if(!navbar.classList.contains("active")) {
        navbar.classList.add('active'); 
    }
});

iconSearch.addEventListener('click', () => {
    if(!navbar.classList.contains("active")) {
        navbar.classList.add('active'); 
    }
});
