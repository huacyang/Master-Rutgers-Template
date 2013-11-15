function remove_mobile() {
	var nav = document.getElementById('section-wrapper');
	var mobile = document.getElementById('navigation');
	var content = document.getElementById('mobile_dropdown');
	
	nav.appendChild(content);
	nav.removeChild(mobile);
	
	content.className = "left nav-cover";
	content.id = "navigation";
	//console.log(nav);
}

function remove_class_long() {
	var classes = $('.long');
	for (var i = 0; i < classes.length; i++) {
		classes[i].className = "blab";
	}
}

$(window).ready(function(e) {
	remove_mobile();
	//remove_class_long();
});
