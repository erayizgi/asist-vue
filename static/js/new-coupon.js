$.noConflict();

jQuery(document).ready(function(){


    // ENABLES TOOLTIP
    jQuery('[data-toggle="tooltip"]').tooltip();

    // MOBILE MENU EFFECTS
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

    jQuery(document).on('click', '.match', function(){

        var sibling = jQuery(this).next();

        jQuery('.match').find('.btn-add').show();
        jQuery('.match').find('.btn-remove').removeClass('active');

        if(sibling.hasClass('match-detail'))
        {
            if(jQuery(sibling).is(':visible')===true)
            {
                sibling.hide();
                jQuery(this).find('.btn-add').show();
                jQuery(this).find('.btn-remove').removeClass('active');
            }
            else
            {
                jQuery('.match-detail').hide();
                sibling.show();
                jQuery(this).find('.btn-add').hide();
                jQuery(this).find('.btn-remove').addClass('active');
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

});