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
    $('.short-individual').on('click mouseenter', function() {
        $('.short-individual, .short-motoric, .short-gymnastic').fadeOut().promise().done(function() {
            $('.desc-individual').fadeIn();
        })
    })

    $('.short-motoric').on('click mouseenter', function() {
        $('.short-individual, .short-motoric, .short-gymnastic').fadeOut().promise().done(function() {
            $('.desc-motoric').fadeIn();
        })
    })

    $('.short-gymnastic').on('click mouseenter', function() {
        $('.short-individual, .short-motoric, .short-gymnastic').fadeOut().promise().done(function() {
            $('.desc-gymnastic').fadeIn();
        })
    })

    $('.desc').on('click mouseleave', function() {

        $('.desc').fadeOut().promise().done(function(){
            $('.short-individual').fadeIn();
            $('.short-motoric').fadeIn();
            $('.short-gymnastic').fadeIn();
        });
    })
})