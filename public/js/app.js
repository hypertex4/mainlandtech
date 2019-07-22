

$(document).ready(function () {

    $(document).ready(function () {

        // nav links active style
        $('.link1').click(function () {
            $(this).toggleClass('custom-active').siblings().removeClass('custom-active');
        });
        $('.link2').click(function () {
            $(this).toggleClass('custom-active').siblings().removeClass('custom-active');
        });
        $('.link3').click(function () {
            $(this).toggleClass('custom-active').siblings().removeClass('custom-active');
        });
        $('.link4').click(function () {
            $(this).toggleClass('custom-active').siblings().removeClass('custom-active');
        });
        $('.link5').click(function () {
            $(this).toggleClass('custom-active').siblings().removeClass('custom-active');
        });
    });


    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()

        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        )
    })

    //Sidenav
    $('.sidenav').sidenav();


    // Carousel
    $('.banner-carousel').carousel({
        fullWidth: true,
        indicators: true
    });



    // automatic carousel slide with interval for banner
    window.setInterval(function () { $('.banner-carousel').carousel('next') }, 3000)

    // Team info horizontal scroll
    $('.team-carousel').carousel({
        fullWidth: true
    });

    // automatic carousel slide with interval for team
    // Team info horizontal scroll
    window.setInterval(function () { $('.team-carousel').carousel('next') }, 6000)
    
    // Team info horizontal scroll for mobile
    $('.mobile-team-carousel').carousel({
        fullWidth: true
    });

    // automatic carousel slide with interval for team in mobile
    window.setInterval(function () { $('.mobile-team-carousel').carousel('next') }, 6000)


    // Next desktop carousel slide
    $('.carousel-next').click(function () {
        $('.team-carousel').carousel('next')
    })
    // Previous desktop carousel slide
    $('.carousel-prev').click(function () {
        $('.team-carousel').carousel('prev')
    });
    // Next mobile carousel slide
    $('.carousel-mnext').click(function () {
        $('.mobile-team-carousel').carousel('next')
    })
    // Previous mobile carousel slide
    $('.carousel-mprev').click(function () {
        $('.mobile-team-carousel').carousel('prev')
    })


    // Slide and type
    $('.slider').slider({ full_width: true });//slider init 



});


