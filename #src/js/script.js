
document.addEventListener('DOMContentLoaded', () => {
    // @@include("swiper-bundle.min.js",{});
    @@include("wNumb.min.js",{});
    @@include("nouislider.js",{});
    @@include("spoller.js",{});
    @@include("select.js",{});
    @@include("tabs.js",{});
    // @@include("some.js",{});
    // @@include('burger.js',{});
    
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
    
    // quantity
    const quantityButtons = document.querySelectorAll('.quantity__button');
    if(quantityButtons.length > 0 ){
        quantityButtons.forEach(element => {
            element.addEventListener('click', () => {
                let value = parseInt(element.closest('.quantity').querySelector('input').value);
                if(element.classList.contains('quantity__button_plus')){
                    value++;
                }else{
                    value--;
                    if(value < 1){
                        value = 1 ;
                    }
                }
                element.closest('.quantity').querySelector('input').value = value;
            });
        });
    }

       //  slider products
       if(document.querySelector('.products-slider')){
        const productsSlider = new Swiper('.products-slider__item', {     
                slidesPerView: 1,
                simulateTouch:false,
                // loop: true,
                // autoHeight: true,
                slideClass: 'products-slider__slide',
                pagination: {
                  el: '.products-slider__info',
                  type: 'fraction'
                },
                navigation: {
                    nextEl: '.products-slider__arrow_next',
                    prevEl: '.products-slider__arrow_prev',
                  },
            })
       }
    //   filter show
    const mediaQuery = window.matchMedia("screen and (max-width: 992px)");
    mediaQuery.addListener(mobileFilter);
    mobileFilter(mediaQuery);

    function mobileFilter(mq) {
        const filterTitle = document.querySelector('.filter__title');
        if(filterTitle){
             filterTitle.addEventListener('click', () => {
                filterTitle.classList.toggle('_active');
                filterTitle.nextElementSibling.classList.toggle('_active');
            });
        }
       
    }

    // filter price
            const sliderFilter = document.querySelector('.price-filter__slider');
            if(sliderFilter){
              noUiSlider.create(sliderFilter, {
                start: [0, 100000],
                connect: true,
                tooltips: [wNumb({decimals: 0}), wNumb({decimals: 0})],
                range: {
                    'min': 0,
                    'max': 200000
                }
            });
            const priceStart = document.querySelector('.values-price-filter__input_start');
            const priceEnd = document.querySelector('.values-price-filter__input_end');
            priceStart.addEventListener('change', setPriceValues);
            priceEnd.addEventListener('change', setPriceValues);

            function setPriceValues() {
                let priceStartValue;
                let priceEndValue;
                if(priceStart.value != ''){
                    priceStartValue = priceStart.value;
                }
                if(priceEnd.value != ''){
                    priceEndValue = priceEnd.value;
                }
                sliderFilter.noUiSlider.set([priceStartValue,priceEndValue]);
            }  
            }
     // product slider

        if(document.querySelector('.images-product')){
            const imagesSubSlider = new Swiper('.images-product__subslider', {     
                    slidesPerView: 4,
                    // simulateTouch:false,
                    // loop: true,
                    // autoHeight: true,
                    slideClass: 'images-product__subslide',
                }); 
            const imagesMainSlider = new Swiper('.images-product__mainslider', {     
                    slidesPerView: 1,
                    // simulateTouch:false,
                    // loop: true,
                    // autoHeight: true,
                    slideClass: 'images-product__mainslide',
                    thumbs: {
                        swiper: imagesSubSlider,
                    },
                });
               
            }        
    //  slider main
        if(document.querySelector('.mainslider')){
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
       
            // logo slider

                if(document.querySelector('.brands-slider')){
                        const brandsSlider = new Swiper('.brands-slider__body', {     
                                slidesPerView: 5,
                                // simulateTouch:false,
                                loop: true,
                                // autoHeight: true,
                                slideClass: 'brands-slider__slide',
                                // pagination: {
                                //   el: '.products-slider__info',
                                //   type: 'fraction'
                                // },
                                navigation: {
                                    nextEl: '.brands-slider__arrow_next',
                                    prevEl: '.brands-slider__arrow_prev',
                                },
                                breakpoints: {
                                    // when window width is >= 320px
                                    320: {
                                      slidesPerView: 1
                                    },
                                    // when window width is >= 480px
                                    480: {
                                      slidesPerView: 2
                                    },
                                    600: {
                                      slidesPerView: 3
                                    },
                                    // when window width is >= 640px
                                    768: {
                                      slidesPerView: 4
                                    },
                                     992: {
                                      slidesPerView: 5
                                    },
                                  }
                            })
                }
            

        
            // image slider
            const mainsliderImages = document.querySelectorAll('.mainslider__image');
            const mainsliderDotts = document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet');
                
            mainsliderImages.forEach((element,index) => {
                mainsliderImage = element.querySelector('img').getAttribute('src');
                    mainsliderDotts[index].style.backgroundImage = `url("${mainsliderImage}")`;
            });
        }
});