// toggle logic

// declare main vars
let toggleBtn = document.querySelector('header .toggle')
let overlay = document.querySelector('.overlay')
let navLinks = document.querySelector('.container header ul.links')
let closeBtn = document.querySelector('.container header .close')
console.log(navLinks)

toggleBtn.onclick = function () {
    navLinks.classList.add('col')
    toggleBtn.classList.add('clicked')
    overlay.classList.add('clicked')
    closeBtn.classList.add('show')
}

closeBtn.onclick = function () {
    navLinks.classList.remove('col')
    toggleBtn.classList.remove('clicked')
    overlay.classList.remove('clicked')
    closeBtn.classList.remove('show')
    closeBtn.classList.remove('show')

}