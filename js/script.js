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
        $('section.gallery ul li img').on('click', function () {
            $("*").removeClass("bigger");
            $("section.gallery ul li div").addClass('hide');
            $(this).parent().toggleClass('bigger');
            $(this).prev().removeClass('hide');
        });

        $('section.gallery ul li .arrow-left').on('click', function () {
            $("*").removeClass("bigger");
            $("section.gallery ul li div").addClass('hide');
            $(this).parent().parent().prev().addClass('bigger');
            $(this).parent().parent().prev().children("div").removeClass("hide");
        });

        $('section.gallery ul li .arrow-right').on('click', function () {
            $("*").removeClass("bigger");
            $("section.gallery ul li div").addClass('hide');
            $(this).parent().parent().next().addClass('bigger');
            $(this).parent().parent().next().children("div").removeClass("hide");
        });
    })();

    function redimensionnement(){

        var $image = $('.slider img');
        var $video = $('.slider video');

        var image_width = $image.width();
        var image_height = $image.height();

        var video_width = $video.width();
        var video_height = $video.height();

        var overi = image_width / image_height;
        var underi = image_height / image_width;

        var overv = video_width / video_height;
        var underv = video_height / video_width;


        var body_width = $(window).width();
        var body_height = $(window).height();

        if (body_width / body_height >= overi) {
            $image.css({
                'width': body_width + 'px',
                'height': Math.ceil(underi * body_width) + 'px',
                'left': '0px',
                'top': Math.abs((underi * body_width) - body_height) / -2 + 'px'
            });
        }

        else {
            $image.css({
                'width': Math.ceil(overi * body_height) + 'px',
                'height': body_height + 'px',
                'top': '0px',
                'left': Math.abs((overi * body_height) - body_width) / -2 + 'px'
            });
        }

        if (body_width / body_height >= overv) {
            $video.css({
                'width': body_width + 'px',
                'height': Math.ceil(underv * body_width) + 'px',
                'left': '0px',
                'top': Math.abs((underv * body_width) - body_height) / -2 + 'px'
            });
        }

        else {
            $video.css({
                'width': Math.ceil(overv * body_height) + 'px',
                'height': body_height + 'px',
                'top': '0px',
                'left': Math.abs((overv * body_height) - body_width) / -2 + 'px'
            });
        }
    }

    $(document).ready(function(){

        // Au chargement initial
        redimensionnement();

        // En cas de redimensionnement de la fenêtre
        $(window).resize(function(){
            redimensionnement();
        });

    });


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

