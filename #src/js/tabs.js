 // * tabs
 let tabs = document.querySelectorAll('.tabs_element'),
 tabsContent = document.querySelectorAll('.tab'),
 tabsParent = document.querySelector('.tabs');

 function hideTabsContent(){
 tabsContent.forEach(item => {
     item.classList.add('hide');
     item.classList.remove('show', 'fade');
 });

 tabs.forEach(item => {
     item.classList.remove('tabs_element_active');
 });
 };

 let showTabsContent = function (i = 0){
     tabsContent[i].classList.add('show', 'fade');
     tabs[i].classList.add('tabs_element_active');
 }

 hideTabsContent();
 showTabsContent(0);

 tabsParent.addEventListener('click', (event) => {
 const target = event.target;

 if( target && target.classList.contains('tabs_element')){
     hideTabsContent();
     tabs.forEach((item, i)=>{
         if( target == item ){
             showTabsContent(i);
         }
         });
 }
 });