$(document).ready(function(){
    $("#preloader").fadeOut();

    // $('.hero-heading').addClass('slide-in');

    cardScroll();

    $('.slick.marquee').slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false
      });
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                loop: true
            },
            600:{
                items:2,
                nav:true,
                loop: true
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    })
    $( ".owl-prev").html('<i class="bi bi-chevron-left"></i>');
    $( ".owl-next").html('<i class="bi bi-chevron-right"></i>');
});

function cardScroll() {
    // Get the container and all the cards
    var container = document.getElementById('container');
    var cards = document.querySelectorAll('.why-us-card');

    // Add mouseover event listener to each card
    cards.forEach(function(card, index) {
        card.addEventListener('mouseover', function() {
            // Calculate the position of the hovered card relative to the container
            var containerTop = container.getBoundingClientRect().top;
            var cardTop = card.getBoundingClientRect().top;
            var scrollTop = cardTop - containerTop - 46;

            // Adjust the scrollbar thumb position smoothly
            var scrollbarThumb = document.querySelector('.ps__thumb-y');
            scrollbarThumb.style.transition = 'top 0.9s cubic-bezier(0.25, 1, 0.5, 1.25)'; // Adjust transition speed and cubic-bezier values as needed
            scrollbarThumb.style.animation = 'bounce 0.9s'; // Add bounce animation
            scrollbarThumb.style.top = scrollTop + 'px';
        });
    });
}
