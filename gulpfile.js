
function openPara(evt) {
            
            var i, tabcontent, tablinks, demo;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
                

            }
            evt.currentTarget.className += " active";
            
            
        }

        const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows



  breakpoints:{
    1000:{
        slidesPerView: 3,
    },
  
  }
});