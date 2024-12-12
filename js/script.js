jQuery(document).ready(($) => {
    let nav = $("nav.top-nav");
    var default_st = $(window).scrollTop();
    if (default_st > 20){
        nav.addClass('sticky');
    }else{
        nav.removeClass('sticky');
    }
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > 20){
            nav.addClass('sticky');
        }else{
            nav.removeClass('sticky');
        }
    });
    let btn = $(".menu-btn");
    let menu = $("nav.top-nav ul");
    let menuItems = $("nav.top-nav ul a");
    let closeIcon = $(".menu-btn .close");
    let openIcon = $(".menu-btn .open");
    menuItems.click(() => {
        if(menu.hasClass('open')){
            menu.removeClass('open');
            openIcon.show();
            closeIcon.hide();
        }
    });
    btn.click(() => {
        if(menu.hasClass('open')){
            menu.removeClass('open');
            openIcon.show();
            closeIcon.hide();
        }else{
            menu.addClass('open');
            closeIcon.show();
            openIcon.hide();
        }
    });
    $("#msg_form").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true,
            },
            accept: {
                required: true,
            },
        },
        messages: {
            
        },
        errorPlacement: function(error, element) {
            if (element.attr("type") == "radio") {
                error.insertAfter(element.closest('.form-group'));
            } else {
                error.insertAfter(element);
            }
        }
    });

    document.querySelectorAll('nav.top-nav ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
        
          const offset = 100;
          const elementPosition = targetElement.offsetTop;
          const offsetPosition = elementPosition - offset;
      
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth', // Smooth scrolling
          });
        });
      });
      
});