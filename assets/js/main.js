"use strict";var arrow=document.querySelector(".arrow-up"),links=document.querySelectorAll(".nav__link"),menu=document.querySelector(".header__menu-icon");menu.addEventListener("click",(function(){menu.classList.toggle("bx-x")})),arrow.addEventListener("click",(function(){window.scrollTo({behavior:"smooth",top:0})})),links.forEach((function(e){e.addEventListener("click",(function(){removeLinkActive(),e.classList.add("active")}))}));var removeLinkActive=function(){return links.forEach((function(e){return e.classList.remove("active")}))};function scrollActive(){var e=window.scrollY,i=window.innerHeight;e<i?links[0].classList.add("active"):links[0].classList.remove("active"),e>=i&&e<2*i?links[1].classList.add("active"):links[1].classList.remove("active"),e>=2*i?links[2].classList.add("active"):links[2].classList.remove("active")}window.addEventListener("scroll",scrollActive);
//# sourceMappingURL=main.js.map