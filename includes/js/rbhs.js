/*
 * Function for changing the navigation bar.
 */

function mobile() {
    //console.log("Windows width: " + $(window).width());
    var menu = $('#mobile_menu');
    var header = $('#mobile_header');
    var dropdown = $('#mobile_dropdown');
    var shifting = $('#shifting');
    if ($(window).width() <= 979 && !menu.hasClass('has-dropdown')) {
        //console.log("Mobile");
        menu.addClass('has-dropdown');
        dropdown.addClass('dropdown');
        header.addClass('show-for-medium-down');
        header.removeClass('show-for-small');
        shifting.removeClass('shiftup');
    } else if ($(window).width() >= 980 && menu.hasClass('has-dropdown')) {
        //console.log("Full Screen");
        menu.removeClass('has-dropdown');
        dropdown.removeClass('dropdown');
        header.removeClass('show-for-medium-down');
        header.addClass('show-for-small');
        shifting.addClass('shiftup');
    }
}

// During load
$(window).load(function() {
    $(window).resize(function() {
        mobile();
    });
});

// On first load
$(window).ready(function(e) {
    mobile();
});

