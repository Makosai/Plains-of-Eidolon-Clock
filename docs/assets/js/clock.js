Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}

setTimeout(updateTime(), 1000);

function updateTime() {
    // Variables
    var date = new Date();
    var now = Math.round(date.getTime() / 1000);
    var midnight = 1508104500;

    // Calculations
    now -= midnight;
    now %= 9000;
    var hour = Math.round(now / 375);
    now %= 375;
    var min = Math.round(now / 6.25);
    now %= 6.25;
    var zero = (min < 10) ? "0" : "";

    // Format
    var ampm;
    if(hour % 12 == 0) {
        ampm = "";
    } else if(hour > 12) {
        ampm = "pm";
        hour -= 12;
    } else {
        ampm = "am";
    }
    
    $('#timer').html(`${(hour).pad()}:${(min).pad()} ${ampm}`);
}