
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})

let li_t = document.querySelector(".li-t");
let ar = document.querySelector(".treat");
let dr = document.querySelector(".drop");
li_t.addEventListener("click",()=>{
    dr.classList.toggle("show-drop");

    if(ar.classList.contains('uil-angle-down')){
        ar.classList.remove("uil-angle-down");
        ar.classList.add("uil-angle-up")
    }
    else{
        ar.classList.remove("uil-angle-up");
        ar.classList.add("uil-angle-down")
    }
})


let li_tt = document.querySelector(".li-tt");
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

//   show hide faqs 

  let faqs = document.querySelectorAll("section.faqs .faqs");

  faqs.forEach(i =>{
    i.querySelector(".faqs-head").addEventListener("click",()=>{
        i.querySelector(".faqs-p").classList.toggle("show-faq");
        const icn = i.querySelector(".sh");
        if(icn.classList.contains("uil-plus")){
            icn.classList.remove("uil-plus");
            icn.classList.add("uil-minus");
        }
        else{
            icn.classList.remove("uil-minus");
            icn.classList.add("uil-plus");
        }

    })
  })