jQuery(function($){


    var handlers = [
        //animation,
        sliderSlick,
        menu,
        forms
    ];

    $.each(handlers, function(i, handler){
        try {
            handler.call();
        } catch (e) {
            console.log('Error! ' + e);
        }
    });

    function animation() {
        var controller = new ScrollMagic.Controller();


        var timeline = new TimelineMax();

        timeline
            .add([
                TweenMax.to(".client-block_image h2", 1, {opacity: 1}),
                TweenMax.to(".client-block_image img", 1, {opacity: 0.5})
            ]);

        var scene = new ScrollMagic.Scene({triggerElement: ".client-block_image", duration: 300})
            .setTween(timeline)
            .addTo(controller);

        timeline = new TimelineMax();

        timeline
            .add([
                TweenMax.to(".client-block_image h2", 0.5, {opacity: 0}),
                TweenMax.to(".client-block_image img", 0.5, {opacity: 1})
            ]);

        scene = new ScrollMagic.Scene({triggerElement: ".client-block_image", duration: 600, triggerHook: 'onLeave'})
            .setTween(timeline)
            .addTo(controller);



        timeline = new TimelineMax();

        $('.products-block_item').each(function() {
            timeline
                .add(
                    TweenMax.to(this, 1, {opacity: 1}),
                    '-=0.5'
                );
        });

        scene = new ScrollMagic.Scene({triggerElement: ".products-block", duration: 300,  triggerHook: 0.9})
            .setTween(timeline)
            .addTo(controller);


        timeline = new TimelineMax();

        $('.advantages-block_item').each(function() {
            timeline
                .add(
                    TweenMax.to(this, 1, {opacity: 1}),
                    '-=0.5'
                );
        });

        scene = new ScrollMagic.Scene({triggerElement: ".advantages-block", duration: 400,  triggerHook: 0.9})
            .setTween(timeline)
            .addTo(controller);

        timeline = new TimelineMax();

        $('.partners-block_items img').each(function() {
            timeline
                .add(
                    TweenMax.to(this, 1, {opacity: 1}),
                    '-=0.5'
                );
        });

        scene = new ScrollMagic.Scene({triggerElement: ".partners-block", duration: 200,  triggerHook: 0.9})
            .setTween(timeline)
            .addTo(controller);

        if($('.client-block').length) {
            $('.qq').css('opacity', 0);

            scene = new ScrollMagic.Scene({triggerElement: ".client-block", duration: 300,  triggerHook: 0.9})
                .setTween(TweenMax.to('.qq', 1, {opacity: 1}))
                .addTo(controller);
        }


    }

    function sliderSlick() {

        $('.title-block_slider')
            .slick({
                //autoplay: true,
                autoplaySpeed: 5000,
                dots: true,
                arrows: false,
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                fade: false,
                pauseOnHover: false
            });

        $('.download-block_image')
            .slick({
                autoplay: false,
                autoplaySpeed: 3000,
                dots: false,
                arrows: true,
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                responsive: [
                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 3,
                            centerMode: true,
                            centerPadding: '10px'
                        }
                    }
                ]
            });

    }


    function menu() {
        $('.mobile-menu-burger')
            .on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();

                $('.mobile-menu').velocity('slideDown');
            });

        $('.mobile-menu__close')
            .on('click', function(e) {
                e.preventDefault();

                $('.mobile-menu').velocity('slideUp');
            });
    }

    function forms() {
        $('form').each(function() {
            var $form = $(this);

            $form.on('submit', function() {
                var err = false;

                $('input, textarea', $form).each(function() {
                    if($(this).val().length < 3) {
                        $(this).addClass('error');
                        err = true;
                    }
                });

                if(err) {
                    return false;
                }
            })
        });

        $('input, textarea').on('focus',function() {
            $(this).removeClass('error');
        })
    }
});