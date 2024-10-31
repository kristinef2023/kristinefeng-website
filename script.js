


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
        strings: ['Designer', 'Developer', 'Traveler', 'Writer'],
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

//Contact Form
function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission

    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const mailtoLink = `mailto:kristinef2023@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;

    // Optionally, reset the form fields
    e.target.reset();
}
