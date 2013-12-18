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

function activate(id, classes) {
    document.getElementById(id).className = classes;
}

/*
 * Function for setting the corresponding tab on the navigation bar active
 */
function active() {
    var url = document.URL,
        i = 0,
        found = false;
    var token = url.replace(/\./g, "/");
    token = token.split("/");
    for (; i < token.length; i++) {
        var found = true;
        switch (token[i]) {
        case "about":
            activate("about", "active");
            break;
        case "members":
            activate("members", "active");
            break;
        case "committees":
            activate("committees", "active");
            break;
        case "meetings":
            activate("meetings", "active");
            break;
        case "minutes":
            activate("minutes", "active");
            break;
        case "join":
            activate("join", "active");
            break;
        case "reports":
            activate("reports", "active");
            break;
        default:
            found = false;
        }
        if (found) break;
	}
	if (!found) {
		activate("home", "active");
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
    active();
});

