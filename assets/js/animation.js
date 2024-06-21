$(document).ready(function() {
    $('.hero-heading').removeClass('d-none');
    $('.hero-img-section').removeClass('d-none');
    $('.hero-action-btn').removeClass('d-none');
    // $('.why-choose-us-img').removeClass('d-none');
    // $('.why-choose-us-scrollbar').removeClass('d-none');

    
    $(window).scroll(function() {
        var windowHeight = $(window).height();
        var scrollPos = $(window).scrollTop();
        $('.services-heading').each(function() {
            var offsetTop = $(this).offset().top;
            if (scrollPos > offsetTop - windowHeight + 200) {
                $(this).addClass('slide-in-top-heading');
                $(this).css('visibility', 'visible');
            }
        });
       

        $('.why-choose-us-img').each(function() {
            var offsetTop = $(this).offset().top;
            if (scrollPos > offsetTop - windowHeight + 200) {
                $(this).addClass('slide-in-right');
                $(this).css('visibility', 'visible');
            }
        });
        $('.why-choose-us-scrollbar').each(function() {
            var offsetTop = $(this).offset().top;
            if (scrollPos > offsetTop - windowHeight + 200) {
                $(this).addClass('slide-in-left');
                $(this).css('visibility', 'visible');
            }
        });
        $('.owl-carousel').each(function() {
            var offsetTop = $(this).offset().top;
            if (scrollPos > offsetTop - windowHeight + 200) {
                $(this).addClass('fade-in');
                $(this).css('visibility', 'visible');
            }
        });
        $('#portfolio .right').each(function() {
            var offsetTop = $(this).offset().top;
            if (scrollPos > offsetTop - windowHeight + 200) {
                $(this).addClass('slide-in-right');
                $(this).css('visibility', 'visible');
            }
        });
        $('#portfolio .left').each(function() {
            var offsetTop = $(this).offset().top;
            if (scrollPos > offsetTop - windowHeight + 200) {
                $(this).addClass('slide-in-left');
                $(this).css('visibility', 'visible');
            }
        });

        $('.services-card.right-1').each(function() {
            var offsetTop = $(this).offset().top;
            if (scrollPos > offsetTop - windowHeight + 200) {
                $(this).addClass('slide-in-right');
                $(this).css('visibility', 'visible');
            }
        });
        $('.services-card.left-1').each(function() {
            var offsetTop = $(this).offset().top;
            if (scrollPos > offsetTop - windowHeight + 200) {
                $(this).addClass('slide-in-left');
                $(this).css('visibility', 'visible');
            }
        });


        $('.services-card.right-2').each(function() {
            var offsetTop = $(this).offset().top;
            if (scrollPos > offsetTop - windowHeight + 200) {
                $(this).addClass('slide-in-right');
                $(this).css('visibility', 'visible');
            }
        });
        $('.services-card.left-2').each(function() {
            var offsetTop = $(this).offset().top;
            if (scrollPos > offsetTop - windowHeight + 200) {
                $(this).addClass('slide-in-left');
                $(this).css('visibility', 'visible');
            }
        });

        $('.services-card.bottom-1').each(function() {
            var offsetTop = $(this).offset().top;
            if (scrollPos > offsetTop - windowHeight + 200) {
                $(this).addClass('slide-in-bottom-2');
                $(this).css('visibility', 'visible');
            }
        });
        $('.services-card.bottom-2').each(function() {
            var offsetTop = $(this).offset().top;
            if (scrollPos > offsetTop - windowHeight + 200) {
                $(this).addClass('slide-in-bottom-2');
                $(this).css('visibility', 'visible');
            }
        });

    });
    
});

