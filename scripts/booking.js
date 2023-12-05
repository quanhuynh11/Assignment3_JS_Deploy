/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dailyRate = 35;
let amountDays = 0;
let weeklyCost = 0;

let fullDayButton = document.getElementById("full");
let halfDayButton = document.getElementById("half");

let weeklyCostAmount = document.getElementById("calculated-cost");

let clearDaysButton = document.getElementById("clear-button");

// create a list of all the days of the week mon-fri
let daysOfWeek = [document.getElementById("monday"), document.getElementById("tuesday"), 
document.getElementById("wednesday"), document.getElementById("thursday"), document.getElementById("friday"),];




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

// go through the array and add an event listener to each of the days of the week
// when the user clicks on a week, call the selectedDays function and pass through the index 
// or the current day of the week that was clicked.
daysOfWeek.forEach(function(day, index) {
    day.addEventListener("click", function() {
        selectedDays(index);
    });
});


// when the user clicks on a day, it will check first if the user has already clicked it
// 
// If the user has clicked the day already, unselect it and subtract one from the total amount of days
// else, apply the clicked class to the day and add one total day
// calculate the new price after the user has clicked a day
function selectedDays(currentDay) {
    if(daysOfWeek[currentDay].classList.contains("clicked")) {
        daysOfWeek[currentDay].classList.remove("clicked");
        amountDays -= 1;
    }
    else {
        daysOfWeek[currentDay].classList.add("clicked");
        amountDays += 1;
    }
    calculate();
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearDaysButton.addEventListener("click", clearAllDays);

// a function that goes through all of the days of the week and removes the "clicked" class
function clearAllDays() {
    for (let i = 0; i < daysOfWeek.length; i++) {
        daysOfWeek[i].classList.remove("clicked");
        amountDays = 0;
        calculate();
    }
}



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfDayButton.addEventListener("click", changeToHalfRate);

function changeToHalfRate() {
    dailyRate = 20;
    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
    calculate();
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDayButton.addEventListener("click", changeToFullRate);

function changeToFullRate() {
    dailyRate = 35;
    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
    calculate();
}




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate() {
    weeklyCost = dailyRate * amountDays;
    weeklyCostAmount.innerHTML = weeklyCost;
}

