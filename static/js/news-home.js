jQuery(document).ready(function () {

    jQuery('#teams-carousel .items').slick({
        arrows: true,
        rows: 1,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '<button class="btn-prev" type="button"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="btn-next" type="button"><i class="fas fa-chevron-right"></i></button>',
        mobileFirst: true,
        responsive : [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 5,
                }
            },
        ]
    });

});