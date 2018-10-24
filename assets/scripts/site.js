// @todo: convert to vanilla js

$(function()
{
    /// navigation ///
    var $breakpoint = 768;
    var $trigger = $('#menu_trigger');
    var $menu = $('#menu');
    var $wrapper = $('#page_wrapper');
    var $menuHeight = 0;

    function openMenu() {
        $menu.show().animate({right: 0}, 400);
        $trigger.addClass('is-open').removeClass('is-closed');
        $menuHeight = $menu.outerHeight();
        $wrapper.addClass('hide-overflow').height($menuHeight);
    }

    function closeMenu() {
        $menu.animate({right: -260}, 200).delay(200).hide(100);
        $trigger.removeClass('is-open').addClass('is-closed');
        $wrapper.removeClass('hide-overflow').height('auto');
    }

    $trigger.click(function() {
        // only expand navigation if less than breakpoint
        console.log('open');
        if ($(window).width() < $breakpoint) {

            // if it is not open already
            if (!$(this).hasClass('is-open')) {
                openMenu();
            } else {
                closeMenu();
            }

            // close with click or touch outside
            $(document).on('click touchend', function(){
                if(!$(event.target).closest('nav').length) {
                    if ($('#menu_trigger').hasClass('is-open')) {
                        closeMenu();
                    }
                }
            });
        }
    }); // end click

    // reset navigation if wider than breakpoint
    $(window).resize(function() {
        if ($(window).width() >= $breakpoint) {
            $menu.removeAttr('style');
            $trigger.removeClass('is-open is-closed').removeAttr('style');
            $wrapper.removeClass('hide-overflow').height('auto');
        }
    }); // end resize
});