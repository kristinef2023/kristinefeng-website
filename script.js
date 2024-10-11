


// window scroll
$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop(); 
    if (scrollTop >= 100) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');
    }
});


// Document Ready
$(document).ready(function() {
    // Typing animation
    new Typed('#type-it', {
        strings: ['Designer', 'Developer', 'Traveler'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
        cursorChar: '|',
    }); 

    //One Page Scroll
    $.scrollIt({
            easing: 'linear',      // the easing function for animation
            topOffset: -70     // offste (in px) for fixed top navigation
    });
});
document.querySelectorAll('.anim-elements div').forEach(star => {
    const randomX = Math.random() * 100; // Random X position in percentage
    const randomY = Math.random() * 100; // Random Y position in percentage
    star.style.left = `${randomX}%`;
    star.style.top = `${randomY}%`;
});
