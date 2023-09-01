const navitems = document.querySelector ('.navItems');

augasha.addEventListener ("click", () => {
    navitems.classList.toggle("active");
})

document.querySelectorAll (".nav-content").forEach (a => a.addEventListener ("click"), () => {
    navitems.classList.remove('active')
})