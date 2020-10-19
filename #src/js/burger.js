 // * burger
    const burger = document.querySelector('.burger');
    const headerMenu = document.querySelector('.menu__body');
    const wrapper = document.querySelector('body');
    burger.addEventListener("click", () =>{
        headerMenu.classList.toggle("menu__body_active");
        burger.classList.toggle("burger_active");
        wrapper.classList.toggle("lock");
    });