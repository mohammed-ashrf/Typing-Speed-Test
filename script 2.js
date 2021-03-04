const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function reload(){
    var date = new Date();
    console.log(date);

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("hour" + hr + "min" + min + "second" + sec)

    let hrposition = (hr*360/12)+(min*(360/60)/12);
    let minposition =(min*360/60)+(sec*(360/60)/60);
    let secposition = (sec*360/60);

    HOURHAND.style.transform = "rotate(" + hrposition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minposition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secposition + "deg)";
}
var interval = setInterval(reload , 1000);
console.log(interval)