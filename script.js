
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})

let li_t = document.querySelector(".li-t");
let ar = document.querySelector(".uil");
li_t.addEventListener("click",()=>{
    if(ar.classList.contains('uil-angle-down')){
        ar.classList.remove("uil-angle-down");
        ar.classList.add("uil-angle-up")
    }
    else{
        ar.classList.remove("uil-angle-up");
        ar.classList.add("uil-angle-down")
    }
})


let li_tt = document.querySelector(".li-t");
let ara = document.querySelector(".more");
li_tt.addEventListener("click",()=>{
    if(ara.classList.contains('uil-angle-down')){
        ara.classList.remove("uil-angle-down");
        ara.classList.add("uil-angle-up")
    }
    else{
        ara.classList.remove("uil-angle-up");
        ara.classList.add("uil-angle-down")
    }
})



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
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });