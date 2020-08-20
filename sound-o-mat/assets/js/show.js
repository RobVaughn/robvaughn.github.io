function showText(id) {
    var x = document.getElementById(id);
    x.style.display = "block";
}

function hideText(id) {
    var x = document.getElementById(id);
    x.style.display = "display";
}

function addBreaks(id, n) {
    alert('Doc width: ' + $(document).width());
    $(document).ready(function() { log('Doc width: ' + $(document).width()); });
    var html = document.getElementById(id).html();
    for (i = 0; i < n; i++) {
	html.append( "<br>" );
    }
    id.html(html);
    if ($(document).width() > 400) {
	alert("whee!");
    }
}
