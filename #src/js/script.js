
document.addEventListener('DOMContentLoaded', () => {
    // @ @include("swiper-bundle.min.js");
    // @@include("some.js");
    // @@include('burger.js');
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
});