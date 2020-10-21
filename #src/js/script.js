
document.addEventListener('DOMContentLoaded', () => {
    // @@include("swiper-bundle.min.js");
    // @@include("some.js");
    // @@include('burger.js');
    
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        const menuParents = document.querySelectorAll('.menu-page__parent > a');
        menuParents.forEach((element,index) => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                element.parentElement.classList.toggle('_active');
            });
        });
      } else {
          const menuParents = document.querySelectorAll('.menu-page__parent');
            menuParents.forEach((element,index) => {
                const menuParent = menuParents[index];
                menuParent.addEventListener('mouseenter', (e) => {
                    menuParent.classList.add('_active');
                });
                menuParent.addEventListener('mouseleave', (e) => {
                    menuParent.classList.remove('_active');
                });
            });          
    }
    

    const menuPageBurger = document.querySelector('.menu-page__burger');
    menuPageBurger.addEventListener('click', () => {
        const menuPageBody = document.querySelector('.menu-page__body');
        menuPageBody.classList.toggle('_active');
        menuPageBurger.classList.toggle('_active');
    });

    const searchBtn = document.querySelector('.search-page__select');
    const categories = document.querySelector('.categories-search');
    searchBtn.addEventListener('click', () => {
        searchBtn.classList.toggle('_active');
        categories.classList.toggle('_active');
    });
    let checkboxCheked = 0;
    const checkboxCategories = document.querySelectorAll('.categories-search__checkbox');
    checkboxCategories.forEach((element,index) => {
        element.addEventListener('change', () => {
            element.classList.toggle('_cheked');
            if(element.classList.contains('_cheked')){
                checkboxCheked++
            }else{
                checkboxCheked--
            }
            const checkedSpan = document.querySelector('.search-page__checkedspan');
            const checkedSpanCategories = document.querySelector('.search-page__checkedspan span');
            const defSpan = document.querySelector('.search-page__defspan');
            if(checkboxCheked > 0){
                checkedSpan.classList.add('_active');
                defSpan.classList.add('_hide');
                checkedSpanCategories.innerHTML = "";
                checkedSpanCategories.insertAdjacentHTML('beforeend',checkboxCheked);
            }else{
                checkedSpan.classList.remove('_active');
                defSpan.classList.remove('_hide');
                checkedSpanCategories.innerHTML = "";
            } 
        });
       
    });
    
    //  slider main
    const mainSlider = new Swiper('.mainslider__body', {
        
        slidesPerView: 1,
        loop: true,
        autoHeight: true,
        slideClass: 'mainslider__slide',
        pagination: {
          el: '.mainslider__dotts',
          clickable: true,
        },
      
     
      })

      if(document.querySelector('.mainslider')){
          const mainsliderImages = document.querySelectorAll('.mainslider__image');
          const mainsliderDotts = document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet');
            
          mainsliderImages.forEach((element,index) => {
            mainsliderImage = element.querySelector('img').getAttribute('src');
            mainsliderDotts[index].style.backgroundImage = `url("${mainsliderImage}")`;
          });
      }
});