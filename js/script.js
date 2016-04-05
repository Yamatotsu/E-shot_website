

$(document).ready(function() {
    /* Menu*/
    
    (function () {
        $('.button_menu').on('click', function () {
            $('ul.menu').toggleClass('show');
            $('.button_menu').toggleClass('click');

        })
        $('.return').on('click', function () {
            $('ul.menu').toggleClass('show');
        })
    })();
    

});