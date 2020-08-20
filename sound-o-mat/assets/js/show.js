function showText(id) {
    var x = document.getElementById(id);
    x.style.display = "block";
}

function hideText(id) {
    var x = document.getElementById(id);
    x.style.display = "display";
}

function addBreaks(id, n) {
    var msg = 'Doc width: ' + $(document).width();
    alert(msg);
    log(msg);
    //$(document).ready(function() { log('Doc width: ' + $(document).width()); });
    var e = document.getElementById(id);
    if ($(document).width() > 400) {
	e.style.display = "block";
    } else {
	e.style.display = "none";
    }
}
