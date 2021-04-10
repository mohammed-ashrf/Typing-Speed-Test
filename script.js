const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
var originText = document.querySelector("#origin-text p");

var timer = [0,0,0,0];
var interval;
var timerRunning = false;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    let text = originText.innerHTML;
    let originTextMatch = text.substring(0,textEntered.length);
    if (textEntered == text) {
        clearInterval(interval);
        testWrapper.style.borderColor = "#429890";
        alert("well done!");
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65CCf3";
        } else {
            testWrapper.style.borderColor = "#E95D0F";
        }
    }

}

// Start the timer:
function start() {
    let textEnterdLength = testArea.value.length;
    if (textEnterdLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
    console.log(textEnterdLength);
}
// change the text
var text1 = "My Mentality is that of a samurai, I Would rather commit seppuku than fail.";
var text2 = "For true mastery you need to focus more on the output rather than the input.";
var text3 = "Stay focused,ignore the distractions,and you will accomplish your goals much faster.";
var text4 = "Small minds discuss other people, good minds discuss events and great minds discuss ideas.";
var text5 = "It is better to create than to learn,creating is the essence of life.";
var text6 = "Overconfidence may works someday but definitely kills one day.";
var text7 = "if we wait until we are ready we will wait for the rest of our life.";
var text8 = "your learing ability decides your earing capacity.";
var text9 = "If you don't like a life then you should go and change it.";
var text10 = "I know my bath is full of difficulty, but I am coming with full of confidence.";
var text11 = "We are what we repeatly do. Excellence,therefore, is not an act , but a habit.";
var text12 = "Smart people believe weird things because they are skilled at defending beliefs they arrived at for non-smart reasons.";

var array = [text1,text2,text3,text4,text5,text6,text7,text8,text9,text10,text11,text12];

// Reset everything:
function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunning = false;
   
    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";


    switch(originText.innerHTML) {
        case originText.innerHTML = array[11]:
          originText.innerHTML = array[0];
          break;
        case originText.innerHTML = array[0]:
          originText.innerHTML = array[1];
          break;
        case originText.innerHTML = array[1]:
          originText.innerHTML = array[2];
          break;
        case originText.innerHTML = array[2]:
          originText.innerHTML = array[3];
          break;
        case originText.innerHTML = array[3]:
          originText.innerHTML = array[4];
          break;
        case originText.innerHTML = array[4]:
          originText.innerHTML = array[5];
          break; 
        case originText.innerHTML = array[5]:
          originText.innerHTML = array[6];
          break; 
        case originText.innerHTML = array[6]:
          originText.innerHTML = array[7];
          break;  
        case originText.innerHTML = array[7]:
          originText.innerHTML = array[8];
          break;  
        case originText.innerHTML = array[8]:
          originText.innerHTML = array[9];
          break; 
        case originText.innerHTML = array[9]:
          originText.innerHTML = array[10];
          break;   
        case originText.innerHTML = array[10]:
          originText.innerHTML = array[11];
          break; 
        case originText.innerHTML = array[11]:
          originText.innerHTML = array[0];
          break;         
        default:
          originText.innerHTML = array[11];
      }

}

// Event listeners for keyboard input and the reset
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
