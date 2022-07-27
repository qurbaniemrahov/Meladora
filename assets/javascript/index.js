// search
let search = document.querySelector(".nav-item-search");
let input = document.querySelector(".nav-item-input input");
let empty = document.querySelector(".empty");

search.addEventListener("click", () => {
  input.classList.toggle("active");
});

empty.addEventListener("click", () => {
  input.classList.remove("active");
});
// search

// scrolling header
const navbar = document.querySelector("#navbar")
const firstLine = document.querySelector(".navbar-first")
const secondLine = document.querySelector(".navbar-second")


document.addEventListener("scroll", (e) => {
    if (document.documentElement.scrollTop >= 30) {
 
 
  secondLine.classList.add("navbar-fixed")
    }else{
      secondLine.classList.remove("navbar-fixed")
    
    }
})


// scrolling header



// box
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

});
// box

// scroll top
const yuxari = document.querySelector("#yuxari")

yuxari.addEventListener("click", ()=> {
  window.scrollTo(0,0)
})
// scroll top

// products
$('.hamısı').click(function(){
  $(this).css('color','#91B40D');
  $('.meyve').css('display','flex');
  $('.meyveler').css('color','black');
  $('.terevezler').css('color','black');
  $('.taxıllar').css('color','black');
  $('.digerler').css('color','black');
  $('.terevez').css({'display':'flex'});
  $('.taxıl').css({'display':'flex'});
  $('.diger').css({'display':'flex'});
});
$('.meyveler').click(function(){
  $(this).css('color','#91B40D');
  $('.meyve').css('display','flex');
  $('.hamısı').css('color','black');
  $('.terevezler').css('color','black');
  $('.taxıllar').css('color','black');
  $('.digerler').css('color','black');
  $('.terevez').css({'display':'none'});
  $('.taxıl').css({'display':'none'});
  $('.diger').css({'display':'none'});
});
$('.terevezler').click(function(){
  $(this).css('color','#91B40D');
  $('.terevez').css({'display':'flex'});
  $('.hamısı').css('color','black');
  $('.meyveler').css('color','black');
  $('.taxıllar').css('color','black');
  $('.digerler').css('color','black');
  $('.meyve').css({'display':'none'});
  $('.taxıl').css({'display':'none'});
  $('.diger').css({'display':'none'});
});
$('.taxıllar').click(function(){
  $(this).css('color','#91B40D');
  $('.taxıl').css({'display':'flex'});
  $('.hamısı').css('color','black');
  $('.meyveler').css('color','black');
  $('.terevezler').css('color','black');
  $('.digerler').css('color','black');
  $('.meyve').css({'display':'none'});
  $('.terevez').css({'display':'none'});
  $('.diger').css({'display':'none'});
});
$('.digerler').click(function(){
  $(this).css('color','#91B40D');
  $('.diger').css({'display':'flex'});
  $('.hamısı').css('color','black');
  $('.meyveler').css('color','black');
  $('.terevezler').css('color','black');
  $('.taxıllar').css('color','black');
  $('.meyve').css({'display':'none'});
  $('.terevez').css({'display':'none'});
  $('.taxıl').css({'display':'none'});
});

// products









