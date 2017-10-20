Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}

updateTime();
setInterval(function() { updateTime() }, 1000);

function updateTime() {
    // Variables
    var date = new Date();
    var now = Math.floor(date.getTime() / 1000);
    
    var midnight = 1508104500;

    // Calculations
    now -= midnight;
    now %= 9000;
    var hour = Math.floor(now / 375);
    now %= 375;
    var min = Math.floor(now / 6.25);
    now %= 6.25;
    var zero = (min < 10) ? "0" : "";

    // Format
    var ampm;
    if(hour % 12 == 0) {
        ampm = "";
    } else if(hour > 12) {
        ampm = "pm";
        $('#daynight').attr('class', 'fa fa-moon-o moon');
        hour -= 12;
		$('body').css('background-image', 'url(assets/img/night.jpg)');
    } else {
        ampm = "am";
        $('#daynight').attr('class', 'fa fa-sun-o sun');
		$('body').css('background-image', 'url(assets/img/day.jpg)');
    }
    
    $('#timer').html(`${(hour).pad()}:${(min).pad()} ${ampm}`);
}
