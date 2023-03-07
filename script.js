
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})

let li_t = document.querySelector(".li-t");
let ar = document.querySelector(".treat");
let dr = document.querySelector(".drop");
li_t.addEventListener("click",()=>{
    dr.classList.toggle("show-drop");
    dr.addEventListener("click",()=>{
        dr.classList.remove("show-drop");
    })
    if(ar.classList.contains('uil-angle-down')){
        ar.classList.remove("uil-angle-down");
        ar.classList.add("uil-angle-up")
    }
    else{
        ar.classList.remove("uil-angle-up");
        ar.classList.add("uil-angle-down")
    }
})


let li_tt = document.querySelector(".li-more");
let ara = document.querySelector(".more");
let drm = document.querySelector(".drop-more1");
li_tt.addEventListener("click",()=>{
    drm.classList.toggle("drop-more-show");
    drm.addEventListener("click",()=>{
        drm.classList.remove("drop-more-show");
    })
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
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    //when windows width is >= 600px
    breakpoints:{
        600:{
            slidesPerView:2
        }
    }
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


  let ham_btn = document.querySelector(".hamburger");
  let nav_c = document.querySelector(".nav-mid");
  let mob_lan=document.querySelector(".mob-lann");

  let ha1 = document.querySelector

  ham_btn.addEventListener("click",()=>{
    nav_c.classList.toggle("nav-mid-show");
    mob_lan.classList.toggle("mob-lann-hide");
    ham_btn.classList.toggle("ham");

  });


let animl = document.querySelectorAll('.animl');
let animu = document.querySelectorAll('.animu');
let animr = document.querySelectorAll('.animr');
window.addEventListener('scroll',checkSect);
checkSect();

function checkSect(){
    const trigger =  window.innerHeight / 5 * 4;

    animl.forEach((ele) =>{
        const eleTop = ele.getBoundingClientRect().top;
        if(eleTop < trigger){
            ele.classList.add("anim-show");

        }
        else{
            ele.classList.remove('anim-show');
        }
    })
    animu.forEach((ele) =>{
        const eleTop = ele.getBoundingClientRect().top;
        if(eleTop < trigger){
            ele.classList.add("anim-show1");
            
        }
        else{
            ele.classList.remove('anim-show1');
        }
    })
    animr.forEach((ele) =>{
        const eleTop = ele.getBoundingClientRect().top;
        if(eleTop < trigger){
            ele.classList.add("anim-show2");
            
        }
        else{
            ele.classList.remove('anim-show2');
        }
    })
}