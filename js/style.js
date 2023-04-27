setInterval(date, 1000);
setTimeout(date, 0);
function date() {
    //getting the time and storing in variables
    let d = new Date();
    // console.log(d);
    let years = d.getFullYear();
    let months = d.getMonth();
    let days = d.getDay();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    //arrays for associating the array with month and day
    let mo = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let da = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    //getting the divs with corresponding ids
    let dys = document.getElementById("day");
    let mnths = document.getElementById("month");
    let dats = document.getElementById('date')
    let yrs = document.getElementById("year");
    let hrs = document.getElementById("hour");
    let mins = document.getElementById("minute");
    let secs = document.getElementById("second");

    //setting the text of inputed id
    dys.innerText = da[days];
    mnths.innerText = mo[months];
    dats.innerText = days;
    yrs.innerText = years;
    hrs.innerText = hours;
    mins.innerText = minutes;
    secs.innerText = seconds;

}
var time = new Date();
console.log(
    time.toLocaleString('en-US', { hour: 'numeric', hour12: true })
);  