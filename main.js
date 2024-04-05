var Dob = `1998-07-10`;
const Submit = document.querySelector(".arrow");
const dd = document.querySelector(".Date");
const mm = document.querySelector(".Month");
const yyyy = document.querySelector(".Year");
const error=document.querySelector(".error");
var d, m, y, birthDate, age;

function showError(){


    if(dd.validity.rangeUnderFlow){
       error.textContent="must be a valid day ";

    }else if (dd.validity.rangeOverFlow){
       error.textContent="must be a valid day ";
    }
    else if(dd.validity.valueMissing){
        error.textContent="must enter a date";
    }

    error.className="error active";
}
dd.addEventListener("input",(event)=>{
    if(dd.validity.valid){
        error.textContent="";
        error.className="error";

    }else
    
    showError();
    



});




Submit.addEventListener("click", function (event) {
    if(!dd.validity.valid)
    showError();


    event.preventDefault();



    

    d = (dd.value);
    m = (mm.value);
    y = (yyyy.value);

    Dob = `${y}-${m}-${d}`;
    birthDate = new Date(Dob);
    // console.log(birthDate);
    age = calculateAge(birthDate);
    
    displayResult();




});




//Define the EPOCH date
const EPOCH = new Date(0);
const EPOCH_YEAR = EPOCH.getUTCFullYear(); // EPOCH_YEAR = 1970
const EPOCH_MONTH = EPOCH.getUTCMonth();    // EPOCH_MONTH = 0 (January)
const EPOCH_DAY = EPOCH.getUTCDate();      // EPOCH_DAY = 1


// * @param { Date } birthDate

function calculateAge(birthDate){
    // Calculate the difference between the current date and the birth date
    const diff = new Date(Date.now() - birthDate.getTime());
    // console.log(`${Date.now()} - ${birthDate.getTime()}`);

    // console.log(diff);

    // Calculate the age in years, months, and days
    const years = Math.abs(diff.getUTCFullYear() - EPOCH_YEAR);   // years = 2024 - 2000 = 24
    // console.log(`${diff.getUTCFullYear()} - ${EPOCH_YEAR}=${years}`);
    const months = Math.abs(diff.getUTCMonth() - EPOCH_MONTH);    // months = 1 - 6 = 5
    const days = Math.abs(diff.getUTCDate() - EPOCH_DAY);         // days = 14 - 25 = 11

    // Return the age as an object
    return {
        years,
        months,
        days
    };
};

function displayResult() {
    const blanks = document.querySelectorAll("span");
    const value1 = document.createElement("span");
    value1.textContent = age.years;
    blanks[0].parentNode.replaceChild(value1, blanks[0]);
    const value2 = document.createElement("span");
    value2.textContent = age.months;
    blanks[1].parentNode.replaceChild(value2, blanks[1]);

    const value3 = document.createElement("span");
    value3.textContent = age.days;
    blanks[2].parentNode.replaceChild(value3, blanks[2]);
}