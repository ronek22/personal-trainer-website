// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}


$(document).ready(function() {
    $('.short-individual').on('click', function() {
        $('.short-individual, .short-motoric, .short-gymnastic').fadeOut(300).promise().done(function() {
            $('.desc-individual').fadeIn(300);
        })
    })

    $('.short-motoric').on('click', function() {
        $('.short-individual, .short-motoric, .short-gymnastic').fadeOut(300).promise().done(function() {
            $('.desc-motoric').fadeIn(300);
        })
    })

    $('.short-gymnastic').on('click', function() {
        $('.short-individual, .short-motoric, .short-gymnastic').fadeOut(300).promise().done(function() {
            $('.desc-gymnastic').fadeIn(300);
        })
    })

    $('.desc').on('click', function() {

        $('.desc').fadeOut(300).promise().done(function(){
            $('.short-individual').fadeIn();
            $('.short-motoric').fadeIn();
            $('.short-gymnastic').fadeIn();
        });
    })
})