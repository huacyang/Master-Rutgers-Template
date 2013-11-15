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
        //console.log(token[i]);
        var found = true;
        switch (token[i]) {
        case "about":
            activate("about", "has-dropdown active");
            activate("sb_about", "active");
            break;
        case "chancellor":
            activate("about", "has-dropdown active");
            activate("sb_chancellor", "has-dropdown active");
            break;
        case "chancellor_info":
            activate("about", "has-dropdown active");
            activate("sb_chancellor", "has-dropdown active");
            activate("sb_info", "has-dropdown active");
            break;
        case "chancellor_message":
            activate("about", "has-dropdown active");
            activate("sb_chancellor", "has-dropdown active");
            activate("sb_message", "has-dropdown active");
            break;
        case "provost_newark":
            activate("about", "has-dropdown active");
            activate("sb_chancellor", "has-dropdown active");
            activate("sb_newark", "has-dropdown active");
            break;
        case "provost_nb":
            activate("about", "has-dropdown active");
            activate("sb_chancellor", "has-dropdown active");
            activate("sb_nb", "has-dropdown active");
            break;
        case "policies":
            activate("about", "has-dropdown active");
            activate("sb_policies", "active");
            break;
        case "locations":
            activate("about", "has-dropdown active");
            activate("sb_location", "active");
            break;
        case "directions_scotchplains":
            activate("about", "has-dropdown active");
            activate("sb_location", "active");
            break;
        case "directions_stratford":
            activate("about", "has-dropdown active");
            activate("sb_location", "active");
            break;
        case "directions_somerset":
            activate("about", "has-dropdown active");
            activate("sb_location", "active");
            break;
        case "directions_rhsc":
            activate("about", "has-dropdown active");
            activate("sb_location", "active");
            break;
        case "directions":
            activate("about", "has-dropdown active");
            activate("sb_location", "active");
            activate("sb_directions", "active");
            break;
        case "contact":
            activate("about", "has-dropdown active");
            activate("sb_contact", "active");
            break;
        case "academics":
            activate("academics", "has-dropdown active");
            activate("sb_academics", "active");
            break;
        case "schools":
            activate("academics", "has-dropdown active");
            activate("sb_schools", "active");
            break;
        case "continuing":
            activate("academics", "has-dropdown active");
            activate("sb_continuing", "active");
            break;
        case "online":
            activate("academics", "has-dropdown active");
            activate("sb_online", "active");
            break;
        case "graduate_med":
            activate("academics", "has-dropdown active");
            activate("sb_graduate_med", "active");
            break;
        case "graduate":
            activate("academics", "has-dropdown active");
            activate("sb_graduate", "active");
            break;
        case "undergraduate":
            activate("academics", "has-dropdown active");
            activate("sb_undergraduate", "active");
            break;
        case "admissions":
            activate("admissions", "has-dropdown active");
            activate("sb_admissions", "active");
            break;
        case "financial_aid":
            activate("admissions", "has-dropdown active");
            activate("sb_financial", "active");
            break;
        case "care":
            activate("care", "has-dropdown active");
            activate("sb_care", "active");
            break;
        case "referral":
            activate("care", "has-dropdown active");
            activate("sb_referral", "active");
            break;
        case "community":
            activate("care", "has-dropdown active");
            activate("sb_community", "active");
            break;
        case "practices":
            activate("care", "has-dropdown active");
            activate("sb_practices", "active");
            break;
        case "trials":
            activate("care", "has-dropdown active");
            activate("sb_trials", "active");
            break;
        case "news":
            activate("news", "has-dropdown active");
            activate("sb_news", "active");
            break;
        case "research":
            activate("research", "has-dropdown active");
            activate("sb_research", "active");
            break;
        case "research_org":
            activate("research", "has-dropdown active");
            activate("sb_research_org", "active");
            break;
        case "institutes":
            activate("research", "has-dropdown active");
            activate("sb_institutes", "active");
            break;
        case "information_prospective":
            activate("information", "has-dropdown active");
            activate("sb_prospective", "active");
            break;
        case "information_current":
            activate("information", "has-dropdown active");
            activate("sb_current", "active");
            break;
        case "information_patients":
            activate("information", "has-dropdown active");
            activate("sb_patients", "active");
            break;
        case "information_faculty_staff":
            activate("information", "has-dropdown active");
            activate("sb_faculty", "active");
            break;
        case "information_alumni":
            activate("information", "has-dropdown active");
            activate("sb_alumni", "active");
            break;
        case "information_donors":
            activate("information", "has-dropdown active");
            activate("sb_donors", "active");
            break;
        default:
            found = false;
        }
        if (found) break;
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

