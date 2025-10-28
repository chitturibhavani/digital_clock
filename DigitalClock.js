// Digital Clock
function toDisplayDigitalClock(){
    let dayHeading = document.getElementById("day_heading");
    let dateHeading = document.getElementById("date_heading");
    let timeHeading = document.getElementById("time_heading");
    let secondsHeading = document.getElementById("seconds_heading");

    //  retreivals of date object
    let dateObject = new Date();
    let day = dateObject.getDay();
    let date = dateObject.getDate();
    let month = dateObject.getMonth();
    let year = dateObject.getFullYear();
    let hours = dateObject.getHours();
    let minutes = dateObject.getMinutes();
    let seconds = dateObject.getSeconds();

    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    days = days[day];
    month = months[month];

    // document object manipulation
    dayHeading.textContent = day;
    dateHeading.textContent = `${toConcatenateZeros(date)} - ${month} - ${year}`;
    timeHeading.textContent = `${toConcatenateZeros(hours)}:${toConcatenateZeros(minutes)}`;
    secondsHeading.textContent = toConcatenateZeros(seconds);
}

setInterval(toDisplayDigitalClock,1000);

function toConcatenateZeros(digitalClockData){
    if(digitalClockData<10){
        return digitalClockData.textContent = `0${digitalClockData}`;
    }

    else{
        return digitalClockData;
    }
}
