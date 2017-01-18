function whatIsToday() {
    var today = new Date ();
    var day = today.getDay();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    console.log("Today is: " + days[day]);
    var time = today.toLocaleTimeString();
    console.log("The Time Is: " + time);
}

whatIsToday();


