(()=>{"use strict";const e="error",t="popup_open",o=".loader",n="loader_loading",a=".body",s="show-other-events",c=e=>{const t=Date.parse((new Date).toString()),o=Date.parse(new Date(e).toString());var n;n=o-t,(e=>{const t=document.querySelector(".countdown__number_days"),o=document.querySelector(".countdown__number_hours"),n=document.querySelector(".countdown__number_minutes"),a=document.querySelector(".countdown__number_seconds");t.innerHTML=`0${e.daysLeft}`.slice(-2),o.innerHTML=`0${e.hoursLeft}`.slice(-2),n.innerHTML=`0${e.minutesLeft}`.slice(-2),a.innerHTML=`0${e.secondsLeft}`.slice(-2)})({daysLeft:Math.floor(n/1e3/60/60/24),hoursLeft:Math.floor(n/1e3/60/60)%24,minutesLeft:Math.floor(n/1e3/60)%60,secondsLeft:Math.floor(n/1e3)%60})},r={en:{buttonLang:"EN",promoHeading:"Under Construction",promoSlogan:"We're making lots of improvements and will be back soon",goToEventComment:"Check our event page when you wait:",eventButton:"Go to the event",formErrorMessage:"Oops... Incorrect email. Email should look like example@gmail.com",emailPlaceholder:"Enter your Email and get notified",close:"close",successMessage:"You have successfully subscribed to the email newsletter. Hot news is already in your email",failedMessage:"Sorry, something went wrong. Try again",success:"success!",failed:"failed...",buttonAccordion:"More information",accordionHeader:"All events",tabHeader1:"Hawaiian party",tabHeader2:"Mafia party",tabHeader3:"Party on the beach",tabHeader4:"Summer party",tabHeader5:"Home party",tabHeader6:"Party on the street",otherEventButton:"Other Events"},ru:{buttonLang:"RU",promoHeading:"В разработке",promoSlogan:"Мы делаем много улучшений и скоро вернемся",goToEventComment:"Заглянить на нашу страницу событий:",eventButton:"Перейти к событиям",formErrorMessage:"Упс... Неверный адрес эл. почты. Эл. почта должна выглядеть как example@gmail.com",emailPlaceholder:"Введите свой Email",close:"закрыть",successMessage:"Вы успешно подписались на рассылку новостей по электронной почте.Горячие новости уже на вашей почте",failedMessage:"Извините, что-то пошло не так. Попробуйте снова",success:"успешно!",failed:"ошибка...",buttonAccordion:"Больше информации",accordionHeader:"Все мероприятия",tabHeader1:"Гавайская вечеринка",tabHeader2:"Игра в мафию",tabHeader3:"Вечеринка на пляже",tabHeader4:"Летняя вечеринка",tabHeader5:"Домашняя вечеринка",tabHeader6:"Уличная вечеринка",otherEventButton:"Другие События"}},l=(e,o)=>{let n="";n=(e=>{const t=(()=>{let e="en";return e=document.querySelector(a).classList.contains("ru-lang")?"ru":"en",e})(),o="en"===t?r.en.success:r.ru.success,n="en"===t?r.en.failed:r.ru.failed,s="en"===t?r.en.successMessage:r.ru.successMessage,c="en"===t?r.en.failedMessage:r.ru.failedMessage;return`\n    <h3 class=popup__header>${(null==e?void 0:e.email)?o:n}</h3>\n    <p class=popup__message>${(null==e?void 0:e.email)?`${s} </br><b>${e.email}</b>`:c}</p>\n    `})(o||null);const s=document.querySelector(".popup__content-container"),c=document.createElement("div");c.className="popup__content-container",c.innerHTML=n,s.replaceWith(c),e.classList.add(t)},i=e=>{e.classList.remove(t)},u=(e,t)=>{const o=document.querySelector(".popup"),n=document.querySelector(".popup__content"),a=document.querySelector(".popup__close-button_main"),s=document.querySelector(".popup__close-button_secondary");"success"===e&&t&&l(o,t),"failed"===e&&l(o),o.addEventListener("click",(()=>i(o))),n.addEventListener("click",(e=>e.stopPropagation())),a.addEventListener("click",(()=>i(o))),s.addEventListener("click",(()=>i(o)))},d=()=>{const e=document.querySelector(o);null==e||e.classList.remove(n)};const m=function(e){return t=this,o=void 0,a=function*(){const t={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}};try{const e=yield fetch("https://jsonplaceholder.typicode.com/posts",t),o=yield e.json();d(),u("success",o)}catch(e){d(),u("failed"),console.error(e)}},new((n=void 0)||(n=Promise))((function(e,s){function c(e){try{l(a.next(e))}catch(e){s(e)}}function r(e){try{l(a.throw(e))}catch(e){s(e)}}function l(t){var o;t.done?e(t.value):(o=t.value,o instanceof n?o:new n((function(e){e(o)}))).then(c,r)}l((a=a.apply(t,o||[])).next())}));var t,o,n,a};window.addEventListener("load",(()=>{document.querySelector(a).classList.add("initial-animation")})),c("2023, 5, 31"),setInterval((()=>{c("2023, 5, 31")}),1e3),(()=>{const t=document.querySelector(".form"),a=document.querySelector(".form__email");null==t||t.addEventListener("submit",(s=>{var c,r,l;s.preventDefault(),null===(l=(r=c=a).parentElement)||void 0===l||l.classList.remove(e),r.classList.remove(e),(!(e=>!/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,8})+$/.test(e.value))(c)||((t=>{var o;null===(o=t.parentElement)||void 0===o||o.classList.add(e),t.classList.add(e)})(c),0))&&((()=>{const e=document.querySelector(o);null==e||e.classList.add(n)})(),m({email:a.value}),t.reset())}))})(),(()=>{const e=document.querySelector(a),t=document.querySelector(".nav__button_toggle-lang");t.addEventListener("click",(()=>{t.classList.toggle("ru-lang"),e.classList.toggle("ru-lang"),(e=>{const t=document.querySelector(".form__email");let o="en";e.classList.contains("ru-lang")?(o="ru",t.placeholder=r.ru.emailPlaceholder):(o="en",t.placeholder=r.en.emailPlaceholder),document.querySelectorAll("[data-i18]").forEach((e=>e.textContent=r[o][e.dataset.i18]))})(t)}))})(),(()=>{var e;const t=document.querySelectorAll(".accordion__title"),o=document.querySelectorAll(".accordion__content");t.forEach((e=>e.addEventListener("click",(()=>{const n=document.querySelector(`#${e.dataset.tab}`);(null==n?void 0:n.classList.contains("active"))?(n.classList.remove("active"),e.classList.remove("active"),n.style.height="0"):(o.forEach((e=>{e.classList.remove("active"),e.style.height="0"})),t.forEach((e=>e.classList.remove("active"))),e.classList.add("active"),n.classList.add("active"),n.style.height="560px")})))),null===(e=document.querySelector('[data-tab="tab-1"]'))||void 0===e||e.classList.add("active");const n=document.querySelector("#tab-1");n.classList.add("active"),n.style.height="560px"})(),(()=>{const e=document.querySelector(".footer__events-button"),t=document.querySelector(a);null==e||e.addEventListener("click",(()=>{null==t||t.classList.toggle(s),(e=>{e.classList.contains(s)?document.querySelector(".wrapper-accordion").scrollIntoView({block:"end",behavior:"smooth"}):(e=>{e.scrollIntoView({block:"start",behavior:"smooth"})})(e)})(t)}))})()})();