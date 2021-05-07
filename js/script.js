let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let montauins_behind = document.getElementById('montauins_behind');
let montauins_front = document.getElementById('montauins_front');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector('header');
const target = document.querySelectorAll("[data-anime]");

function animeScroll() {
  const windowTop = window.pageYOffset - 100;
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add('animate');
    } else {
      element.classList.remove('animate');
    }
  })
}

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    montauins_behind.style.top = value * 0.5 + 'px';
    montauins_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.2 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
    animeScroll();
})
