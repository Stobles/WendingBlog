new Swiper('.header__slider--container',{
   slidesPerView: 7,

   breakpoints:{
     992: {
       slidesPerView: 6
     },

     701: {
       slidesPerView: 5
     },

     479:{
       slidesPerView: 3
     },

     0:{
       slidesPerView: 2
     }
   }
});

