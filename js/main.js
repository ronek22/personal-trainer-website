// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}


$(document).ready(function () {

    var elementsHasFadeOut = true;

    $('.short-individual').on('click mouseenter', function () {
        if (!elementsHasFadeOut) {
            return;
        }
        
        elementsHasFadeOut = false;
        $('.short-individual, .short-motoric, .short-gymnastic').fadeOut(200).promise().done(function () {
            elementsHasFadeOut = true;
            $('.desc-individual').fadeIn(function() {
                if($(window).width() <= 991){
                    $("html,body").animate({ scrollTop: $(".desc-individual").offset().top - 100}, 300);
                }
            });
        })
    })

    $('.short-motoric').on('click mouseenter', function () {
        if (!elementsHasFadeOut) {
            return;
        }

        elementsHasFadeOut = false;
        $('.short-individual, .short-motoric, .short-gymnastic').fadeOut(200).promise().done(function () {
            elementsHasFadeOut = true;
            $('.desc-motoric').fadeIn(function() {
                if($(window).width() <= 991){
                    $("html,body").animate({ scrollTop: $(".desc-motoric").offset().top - 100}, 300);
                }
            });
        })
    })

    $('.short-gymnastic').on('click mouseenter', function () {
        if (!elementsHasFadeOut) {
            return;
        }

        elementsHasFadeOut = false;
        $('.short-individual, .short-motoric, .short-gymnastic').fadeOut(200).promise().done(function () {
            elementsHasFadeOut = true;
            $('.desc-gymnastic').fadeIn(function() {
                if($(window).width() <= 991){
                    $("html,body").animate({ scrollTop: $(".desc-gymnastic").offset().top - 100}, 300);
                }
            });
        })
    })

    $('.desc').on('click mouseleave', function () {

        $('.desc').fadeOut().promise().done(function () {
            $('.short-individual').fadeIn();
            $('.short-motoric').fadeIn();
            $('.short-gymnastic').fadeIn();
        });
    })

    $('.nav-link').click(function() {
        var sectionTo = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $(sectionTo).offset().top
        }, 1500);
    });
})