$(document).ready(function() { 

    //  NavToggle
    // ======================================// 

    let navToggle = $('#navToggle'),
        nav = $('#nav');

    
    navToggle.on('click', function(e) {
        e.preventDefault();

        $('body').toggleClass('show-nav');
        $(this).toggleClass('active');
        nav.toggleClass('show');
    })

    // ==========headerScroll============

    let hedear = $('#header'),
        hedearH = hedear.innerHeight(),
        intro = $('#intro'),
        introH = intro.innerHeight();

        headerDark ();

        $(window).on('scroll resize', function(){
            headerDark ();
        })

        $(window).on('resize', function(){

            $('body').removeClass('show-nav');
            navToggle.removeClass('activeNav');
            nav.removeClass('show');
        })

    function headerDark () {
        hedear = $('#header');
        hedearH = hedear.innerHeight();

        let scrollH = $(this).scrollTop();
           
        if (scrollH >= introH - hedearH) {
            hedear.addClass('header--dark');
        } else {
            hedear.removeClass('header--dark');
        }
    }

    // ========Smooth scroll to sections===================

    $('[data-scroll]').on('click', function(event){

        event.preventDefault();

        let sectionScroll = $(this).data('scroll'),
            offsetScroll = $(sectionScroll).offset().top;

            $('body').removeClass('show-nav');
            navToggle.removeClass('activeNav');
            nav.removeClass('show');    

        $('body, html').animate({
            scrollTop: offsetScroll - 20
        }, 1000);
    })

    // ========Scroll Spy===================

    let windowH = $(window).innerHeight(),
        scrollTop = $(window).scrollTop();

    scrollSpy (scrollTop);

    $(window).on('scroll', function(){
        let scrollTop = $(this).scrollTop();

        scrollSpy (scrollTop);
    });

    function scrollSpy (scrollTop) {

        $('[data-scrollspy]').each(function(){

            let sectionId = $(this).data('scrollspy'),
                sectionOffsetTop = $(this).offset().top;

            if (scrollTop >= sectionOffsetTop - (windowH * 0.3)) {
                $('[data-scroll]').removeClass('activeNav');
                $('[data-scroll= "' + sectionId +'"]').addClass('activeNav');
            }

            if (scrollTop == 0 ) {
                $('[data-scroll]').removeClass('activeNav');
            }
        });
    }

    // ========Modal windodw close===================

    $('[data-modal]').on('click', function(e) {
        e.preventDefault();

        let modal = $(this).data('modal');

        $(modal).addClass('show');
        $('body').addClass('no-scroll');

        setTimeout(function() {
            $(modal).find('.modal__content').css({
                transform: 'scale(1)',
                opacity: '1'
            });
        }, 200);

    })

    $('[data-close]').on('click', function(e) {
        e.preventDefault();

        let modal = $(this).parents('.modal');

        modal.find('.modal__content').css({
                transform: 'scale(0.5)',
                opacity: '0'
        });
        
        setTimeout(function() {
            modal.removeClass('show');
            $('body').removeClass('no-scroll');
        }, 200);


    })

    $('.modal').on('click', function() {

        $(this).removeClass('show');
        $('body').removeClass('no-scroll');
    })

    $('.modal__content').on('click', function(e) {
        e.stopPropagation();
    })

    // ========Slider https://kenwheeler.github.io/slick/==========
    
    let inroSlider = $('#introslider');
    
    inroSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 800
    });

    $('#introSliderPrev').on('click', function() {
    inroSlider.slick('slickPrev');
    })

    $('#introSliderNext').on('click', function() {
    inroSlider.slick('slickNext');
    })

    // =====Reviews Slider==============

    let reviewsSlider = $('#reviewsSlider');
    
    reviewsSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 500,
        arrows: false
    });


    // ==============AOS.init===================
    // https://github.com/michalsnik/aos
        
        AOS.init({
        // Global settings:
        disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 80, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 900, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });
    
})