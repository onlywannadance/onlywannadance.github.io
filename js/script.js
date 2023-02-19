const hamburger = document.querySelector('.hamburger'),              //querySelector - получаем ТОЛЬКО ОДИН элемент
      menu = document.querySelector('.menu'),
      menuOverlay = document.querySelector('.menu__overlay');
      closeElem = document.querySelector('.menu__close');
      menuList = document.querySelectorAll('.menu__list');


hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');  
    menu.classList.remove('menu_close-effect');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('menu_active');
    menu.classList.add('menu_close-effect');  
}); 

hamburger.addEventListener('click', () => {
    hamburger.classList.add('hamburger_active');  
});

closeElem.addEventListener('click', () => {
    hamburger.classList.remove('hamburger_active');
}); 

menuList.forEach(element => {
    element.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.remove('menu_active');
        menu.classList.add('menu_close-effect');  
    })
});

document.addEventListener("click", function (e) {
    e.stopPropagation;

    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const menu_is_active = menu.classList.contains("menu_active");

    if (its_menu && menu_is_active)  {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.remove('menu_active');
        menu.classList.add('menu_close-effect');  
    }
});


 const percents = document.querySelectorAll('.use__ratings-percent'),  //querySelectorAll - получаем все элементы
       lines = document.querySelectorAll('.use__ratings-line span');
    
percents.forEach((element, i) => {
    lines[i].style.width = element.innerHTML;
});

$(document).ready(function(){

    function validateForms(form) {
        $(form).validate({
            rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            text: "required"
            },
            messages: {
            name: "Пожалуйста, введите своё имя",
            text: "Пожалуйста введите номер телефона",
            email: {
                required: "Необходим адресс вашей электронной почты",
                email: "Ваш адресс должен быть в формате name@domain.com"
                }
            }
        });  
    }
    
    validateForms('#emailForm');

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",               // Получаем данные
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            $('form').trigger('reset');
        });
        return false;
    });

});


