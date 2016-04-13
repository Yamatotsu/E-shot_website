//<![CDATA[
$(window).load(function() { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});
});
//]]>


$(document).ready(function() {
    /* Menu*/
    
    (function () {
        $('.button_menu').on('click', function () {
            $('ul.menu').toggleClass('show');
            $('svg.mn').toggleClass('menu_trigger');

        });
        $('.return').on('click', function () {
            $('ul.menu').toggleClass('show');
            $('svg.mn').toggleClass('menu_trigger');
        });
        $('button.job').on('click', function () {
            $('button.job').removeClass('selected');
            $(this).addClass('selected');
        });
        $('section.gallery>ul li').on('click', function () {
            $(this).addClass('flex_extend');
        })
    })();

    window.addEventListener("beforeunload", function () {
        document.body.classList.add("animate-out");
    });


    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 800);
                    return false;
                }
            }
        });
    });
});

