let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function (){
    body.classList.toggle('open');
})

const allLink = document.querySelectorAll('.item-nav');
allLink.forEach(item => {
    item.addEventListener('click', () => {
        body.classList.toggle('open');
    })
})

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const mainFlou = document.getElementById("main");

menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
    mainFlou.classList.toggle('flou');
})
