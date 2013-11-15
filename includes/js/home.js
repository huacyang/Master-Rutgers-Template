var total_content = 0;
var randomimages = new Array()

function activate() {
	document.getElementById("home").className = "home-active";
}

function randomize() {
	var shifting = document.getElementById("shifting");
	var img = document.createElement("img");
	var randomly = Math.floor(Math.random() * randomimages.length);
	img.src = randomimages[randomly];
	shifting.removeChild(shifting.lastChild);
	shifting.appendChild(img);
}

/*
 * Function for changing the navigation bar,
 *  from full screen to mobile view,
 *  depending on the wide of the browser
 */
function mobile() {
	console.log("Windows width: " + $(window).width());
	var menu = $('#mobile_menu');
	var header = $('#mobile_header');
	var dropdown = $('#mobile_dropdown');
	var shifting = $('#shifting');
	var slideshow_area = $('#slideshow_area');
	
	/*
	 * Depending on the width of the browser, triggers the following:
	 *  1) switch to mobile navigation bar and static image
	 *  2) switch to full navigation bar and image slideshow
	 */
	if ($(window).width() <= 979) { //&& !menu.hasClass('has-dropdown')) {
		//console.log("Mobile");
		menu.addClass('has-dropdown');
		dropdown.addClass('dropdown');
		header.addClass('show-for-medium-down');
		header.removeClass('show-for-small');
		slideshow_area.addClass('hide-for-medium-down');
		slideshow_area.removeClass('hide-for-small');
		shifting.addClass('show-for-medium-down');
		shifting.removeClass('show-for-small');
		randomize();
	} else { // && menu.hasClass('has-dropdown')) {
		//console.log("Full Screen");
		menu.removeClass('has-dropdown');
		dropdown.removeClass('dropdown');
		header.removeClass('show-for-medium-down');
		header.addClass('show-for-small');
		slideshow_area.addClass('hide-for-small');
		slideshow_area.removeClass('hide-for-medium-down');
		shifting.addClass('show-for-small');
		shifting.removeClass('show-for-medium-down');
	}
	
/*	if ($(window).width() > 800) {
		shifting.addClass('shiftup');
	} else {
		shifting.removeClass('shiftup');
	}*/
}

$(window).load(function(){
	// Specific the image slider speed (in seconds)
	$('.carousel').carousel({
		interval:20000
	});
	
	$('#content_inner').carousel({
		interval:false
	});
	
	$(".carousel-nav a").click(function(e){
		e.preventDefault();
		var index = parseInt($(this).attr('data-to'));
		$('.carousel').carousel(index);
		var nav = $('.carousel-nav');
		var item = nav.find('a').get(index);
		nav.find('a.active').removeClass('active');
		$(item).addClass('active');
	});
	
	$("#carousel_img").bind('slide', function(e) {
		var elements = total_content;
		var nav = $('.carousel-nav');
		var index = $('#carousel_img').find('.item.active').index();
		index = (index == elements - 1) ? 0 : index + 1;
		var item = nav.find('a').get(index);
		nav.find('a.active').removeClass('active');
		$(item).addClass('active');
		
		//$('#content_inner').carousel(index);
	});
	
	$(window).resize(function() {
		mobile();
	});
});

$(window).ready(function(e) {
	function create_img(img_url, img_alt) {
		var img = document.createElement("img");
		img.src = img_url;
		img.alt = img_alt;
		img.title = img_alt;
		return img;
	}
	function create_tag(type, content) {
		var anonymous = document.createElement(type);
		anonymous.innerHTML = content;
		return anonymous;
	}
	function append_content(first, id, content1, content2) {
		var div = document.createElement("div");
		if (content1) { div.appendChild(content1); }
		if (content2) { div.appendChild(content2); }
		if (first) { div.className = "item active"; } 
		else { div.className = "item"; }
		document.getElementById(id).appendChild(div);
	}
	function append_atag(first, link_img) {
		if (first) { link_img.className = "active"; }
		document.getElementById("carouselnav").appendChild(link_img);
	}
	function link_img(img_url, img_alt, img_link, count) {
		var linked_img = document.createElement("a");
		if (count != null) { linked_img.setAttribute("data-to", count); }
		linked_img.href = img_link;
		linked_img.appendChild(create_img(img_url, img_alt));
		return linked_img;
	}
	
	// Pathway to the text file
	var filePath = "slideshow_content.txt"
	// XML request to the above pathway
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET",filePath,false);
	xmlhttp.send(null);
	// Parse the context of the text into an array,
	// separated by new lines
	var fileContent = xmlhttp.responseText;
	var fileArray = fileContent.split('\n')
	
	var i = 8, count = 0, first = true, img_url, img_link, img_title, img_content;
	var img_div, content_div;
	do {
		img_title = fileArray[i];
		img_url = fileArray[i+1];
		img_link = fileArray[i+2];
		img_content = fileArray[i+3];
		img_alt = fileArray[i+4];
		
		if (!img_title || !img_url || !img_link || !img_content || !img_alt) {
			i++;
			continue;
		} else {
			i = i+5;
			append_content(first, "image", link_img(img_url, img_alt, img_link, null), null);
			append_content(first, "content", create_tag("h4", img_title), create_tag("p", img_content));
			append_atag(first, link_img(img_url, null, null, count));
			randomimages.push(img_url);
			count++;
			total_content++;
			if (first) { first = false; }
		}
	} while (i < fileArray.length);
	
	randomize();
	mobile();
	activate();
});
