document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".hero__photos__card");const t=document.querySelectorAll(".hero__photos__card--hidden");let r=!0;var o=document.querySelectorAll(".card");const c=document.querySelectorAll(".card__text--inactive"),l=document.querySelectorAll(".card img");var s=document.querySelectorAll("[data-tab-button]");const d=document.querySelector(".scrollTop");window.addEventListener("scroll",function(){var e,t,i,r;0!==window.scrollY?(e=document.querySelector(".header__container"),t=document.querySelector(".header__logo"),i=document.querySelector(".header__title"),r=document.querySelector(".header__links"),e.classList.add("header__container--fixedStyle"),t.classList.add("header__logo--fixedStyle"),i.classList.add("header__title--fixedStyle"),r.classList.add("header__links--fixedStyle"),d.classList.add("scrollTop--isActive")):(e=document.querySelector(".header__container"),t=document.querySelector(".header__logo"),i=document.querySelector(".header__title"),r=document.querySelector(".header__links"),e.classList.remove("header__container--fixedStyle"),t.classList.remove("header__logo--fixedStyle"),i.classList.remove("header__title--fixedStyle"),r.classList.remove("header__links--fixedStyle"),d.classList.remove("scrollTop--isActive"))}),e.addEventListener("click",function(){if(1==r){for(i=0;i<t.length;i++)t[i].classList.remove("hero__photos__card--hidden");r=!1}else{for(i=0;i<t.length;i++)t[i].classList.add("hero__photos__card--hidden");r=!0}}),o.forEach((e,t)=>{e.addEventListener("click",function(){var e=this.nextElementSibling.classList,t=this.querySelector("img");if(e.contains("card__text--inactive"))for(i=0;i<c.length;i++)c[i].classList.add("card__text--inactive"),l[i].classList.remove("--isActive");e.toggle("card__text--inactive"),t.classList.toggle("--isActive")})});for(let e=0;e<s.length;e++)s[e].addEventListener("click",function(e){var t=e.target.dataset.tabButton,t=document.querySelector(`[data-tab-id=${t}]`),i=document.querySelectorAll("[data-tab-id]");for(let e=0;e<i.length;e++)i[e].classList.remove("theories__item--isActive");t.classList.add("theories__item--isActive");var r=document.querySelectorAll("[data-tab-button]");for(let e=0;e<r.length;e++)r[e].classList.remove("theories__tabs__button--isActive");e.target.classList.add("theories__tabs__button--isActive")})});