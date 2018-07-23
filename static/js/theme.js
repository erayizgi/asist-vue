$.noConflict();

jQuery(document).ready(function(){

    // ENABLES TOOLTIP
    jQuery('[data-toggle="tooltip"]').tooltip();

    jQuery(document).on('mouseover', '.navbar-menu-item', function(){

        // hide recent selected menus
        jQuery('.sub-menu-list').hide();

        if(jQuery(this).find('.sub-menu-list').length > 0)
        {
            jQuery('.sub-menu').show();
            jQuery(this).find('.sub-menu-list').eq(0).show();
        }

    });
    jQuery(document).on('mouseleave', '.navbar-menu-item', function(){

        //jQuery('.sub-menu-list').hide();
        jQuery('.sub-menu').hide();

        if(jQuery('.navbar-menu-item.active').length > 0)
        {
            jQuery(jQuery('.navbar-menu-item.active').eq(0).data('target')).show();
        }

    });
    //jQuery('.navbar-menu-item').mouseleave();

    jQuery(document).on('click', '.match', function(){

        var sibling = jQuery(this).next();

        if(sibling.hasClass('match-detail'))
        {
            if(jQuery(sibling).is(':visible')===true)
            {
                sibling.hide();
            }
            else
            {
                jQuery('.match-detail').hide();
                sibling.show();
            }
        }

    });

    jQuery(document).on('click', '.remove-match', function () {

        jQuery(this).parent().parent().parent().remove();

        calcRate();

    });

    jQuery(document).on('click', '.user-bet', function () {

        var user_bet = jQuery(this).data('bet');
		
		jQuery(this).parent().parent().find('.user-bet').removeClass('active');
		jQuery(this).addClass('active');

        if(jQuery('.match'+user_bet.code).length > 0){
            jQuery('.match'+user_bet.code).remove();
        }

        jQuery('.coupon-items .wrapper').append(
            '<div class="item clearfix match'+user_bet.code+'">' +
                '<div class="football float-left">&nbsp;</div>' +
                '<div class="data float-left">' +
                    '<div class="clearfix"><a href="javascript:void(0)" class="remove-match"><i class="fa fa-times"></i></a></div>' +
                    '<div class="clearfix">' +
                        '<div class="code">'+user_bet.code+'</div>' +
                        '<div class="time">'+user_bet.date+'</div>' +
                    '</div>' +
                    '<strong class="teams">'+user_bet.home+' <span>VS</span> '+user_bet.away+'</strong>' +
                    '<div class="bet clearfix"><span>'+user_bet.type+': '+user_bet.bet+'</span> <em>'+user_bet.rate+'</em></div>' +
                '</div>' +
            '</div>'
        );

        calcRate();

    });

    jQuery(document).on('click', '.custom-checkbox', function () {

        if(jQuery(this).hasClass('active'))
        {
            jQuery(this).find('input[type=checkbox]').eq(0).attr('checked', false);
            jQuery(this).removeClass('active');
        }
        else
        {
            jQuery(this).addClass('active');
            jQuery(this).find('input[type=checkbox]').eq(0).attr('checked', true);
        }

    });

    jQuery(document).on('change', 'input[name="times"]', function () {

        var val = jQuery(this).val();
        var rate = jQuery('#c-rate span strong').html();

        if(val && val > 0)
        {
            var total = parseFloat(rate) * parseFloat(val);
            jQuery('#est-gain').show();
            jQuery('#est-gain').find('span strong').html(total.toFixed(2));
        }
        else
        {
            jQuery('#est-gain').hide();
        }

    });

    function calcRate(){
        var total = 0.0;

        jQuery('.coupon-items .bet em').each(function (i, item) {

            total += parseFloat(jQuery(item).text());
            
        });

        total = total.toFixed(2);

        jQuery('.coupon-rate strong').eq(0).html(total);

        jQuery('input[name="times"]').change();
    }

    // NAVBAR MOBILE MENU EFFECTS
    jQuery(document).on('click', 'button[data-slide=left]', function () {

        var data = jQuery(this).data();

        jQuery(data.target).stop();
        jQuery(data.target).animate({width: 'toggle'}, '500');

    });
    jQuery(document).on('click', '.btn-close', function () {

        var target = jQuery(this).attr('href');
        var slide = jQuery(this).data('slide');

        jQuery(target).stop();
        jQuery(target).animate({width: 'toggle'}, '500');

    });

    if( jQuery('#news_sub_slide').length > 0 )
    {
        jQuery('#news_sub_slide .slides').slick({
            arrows: true,
            slidesPerRow: 3,
            slidesToShow: 3,
            prevArrow: '<button class="btn-prev" type="button"><i class="fas fa-caret-left"></i></button>',
            nextArrow: '<button class="btn-next" type="button"><i class="fas fa-caret-right"></i></button>',
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });
    }

    /*
    *
    * HOME TOP GAMES SLIDER
    *
    * */
    if(jQuery('#top-games-area-mobile').length > 0){
        jQuery('#top-games-area-mobile .top-games-tab-items').slick({
            arrows: true,
            prevArrow: '<button class="btn-prev" type="button"><i class="fas fa-caret-left"></i></button>',
            nextArrow: '<button class="btn-next" type="button"><i class="fas fa-caret-right"></i></button>',
            slidesToShow: 1,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: 5
                    }
                }
            ]
        });
    }

    //jQuery('#sub_slider_wrapper .btn-prev, #sub_slider_wrapper .btn-next').click(function () {
    //
    //    jQuery('#news_sub_slide .slides').css("transform: translateX(-12.5%)");
    //
    //});

    jQuery(document).on('click', '.tab-link', function () {

        var _this = jQuery(this);
        var target = _this.attr('href');
        var parent = _this.closest('[role=tablist]');

        parent.find('.tab-link').removeClass('active');
        _this.addClass('active');

        jQuery(target).closest('[role=tabpanel]').find('.tab-pane').removeClass('show');
        jQuery(target).addClass('show');

        if(jQuery('#top-games-area-mobile .top-games-tab-items').length > 0)
        {
            jQuery('#top-games-area-mobile .top-games-tab-items').slick('slickSetOption', 'arrows', true, true);
        }

        return false;
    });

    jQuery(document)
        .on('mouseover', '#login-after-menu', function () {
            jQuery(this).parent().addClass('active');
        })
        .on('mouseout', '#login-after-menu', function () {
            jQuery(this).parent().removeClass('active');
        });

    // COUNTDOWN FOR HOME MAIN SLIDER
    jQuery('.countdown .counter').each(function () {

        var _this = jQuery(this);
        var date = _this.data('time');

        if(date){
            jQuery(this).bind(myCounter);
        }

    });

    var timers = setInterval(function(){

        jQuery('.countdown .counter').each(function () {

            var _this = jQuery(this);
            var date = _this.data('event-date');

            if(date){
                myCounter(_this, date);
            }

        });

    }, 1000);

    function myCounter(item, date){

        var d = new Date();
        var event = new Date(date);
        var diff = new Date(event - d);
        var days = Math.floor(diff/1000/60/60/24);
        var hrs = Math.floor( diff/1000/60/60 - (days*24));
        var mns = Math.floor(diff/1000/60 - ((days*24 + hrs)*60));

        if(mns > 0){
            --mns;
        }else{
            if( hrs > 0){
                --hrs;
                mns = 59;
            }else{
                if(days  > 0){
                    hrs = 23;
                    mns = 59;
                    --days;
                }
            }
        }

        var vmns = mns < 10 ? '0'+mns : mns;
        var vhrs = hrs < 10 ? '0'+hrs : hrs;
        var vdays = days < 10 ? '0'+days : days;
        var separator = ':';

        item.html(
            '<span>'+vdays+'</span>' +
            '<span>'+separator+'</span>' +
            '<span>'+vhrs+'</span>' +
            '<span>'+separator+'</span>' +
            '<span>'+vmns+'</span>'
        );
    }
});