const menuCase = document.querySelector('.menu');
const btnOpenMenu = document.querySelector('.fa-bars');
const btnCloseMenu = document.querySelector('.fa-times');
var listItemMenu = document.querySelectorAll('.link-item-menu');


btnOpenMenu.addEventListener('click', () => {
    menuCase.classList.remove('hidden');


    listItemMenu.forEach(itemMenu => {
        itemMenu.addEventListener('click', () => {
            setTimeout(function (e) {
                menuCase.classList.add('hidden');
            }, 850);
        })
        
    });

});

btnCloseMenu.addEventListener('click', () => {
    menuCase.classList.add('hidden');
})