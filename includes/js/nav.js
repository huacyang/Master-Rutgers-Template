// JavaScript Document

function buildNav(id, name, href) {
	$("<li>").attr("id", id).attr("class", "hov").append(
        $("<a>").attr("href", href).text(name)
    ).appendTo($("#navigation"));
}

$(window).ready(function(e) {
	// pathway to the text file
	var filePath = "navigation.txt"
	// XML request to the above pathway
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", filePath, false);
	xmlhttp.send(null);
	// parse the context of the text into an array
	var fileContent = xmlhttp.responseText;
	var fileArray = fileContent.split('\n')
	var id, name, href, url;
	// parse the current URL
	var urlContent = document.URL
	var urlArray = urlContent.split("/");
	var url = (urlArray[urlArray.length-1]);
	
	for (var i = 0; i < fileArray.length; i++) {
		var file = fileArray[i].split(':');
		name = file[0].trim();
		href = file[1].trim();
		id = name.toLowerCase();
		buildNav(id, name, href);
		href = href.replace(/\s/g,"%20");
		// set the respective nav to active
		if (href == url)
			document.getElementById(id).className = "active";
	}

});
