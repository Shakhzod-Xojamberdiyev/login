var elScroolBody = document.querySelector("body");
var elBurgerBtn = document.querySelector(".site-header__btn");
elBurgerBtn.addEventListener("click" , function(){
    elBurgerBtn.closest(".site-header").classList.toggle("site-header__nav-open")
    elScroolBody.classList.toggle("body-scrool");
})
