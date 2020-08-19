function showText(id) {
    var x = document.getElementById(id);
    x.style.display = "block";
}

function hideText(id) {
    var x = document.getElementById(id);
    x.style.display = "display";
}

function addBreaks(id, n) {
    $(document).ready(function() { window.console && console.log('Doc width: ', $(document).width()); });
    if ($(document).width() > 400) {
	for (i = 0; i < n; i++) {
	    $(id).append( "<br>" );
	}
    }
}
