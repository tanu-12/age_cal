var Dob = `1998-07-10`;
const Submit = document.querySelector(".arrow");
const dd = document.querySelector(".Date");
const mm = document.querySelector(".Month");
const yyyy = document.querySelector(".Year");
// const age_data = document.querySelector(".age_data");


var d, m, y, birthDate, age;
function setErrorMessage(input, message, isValid) {
    var age_data = input.parentNode;
    var error = age_data.querySelector(".error");
    if (!isValid) {

        error.textContent = message;
        age_data.className = "age_data error_class";
    }
    else {

        error.textContent = "";
        age_data.className = "age_data";

    }

}

function checkDate(dd) {
    var isValid = false;
    var message;

    var n = new Date(yyyy, mm, 0).getDate();

    if (dd.value == "") {

        message = "This field is required";

    } else if (dd.value > n || dd.value < 1) {
        message = "must be a valid date";
    }
    else
        isValid = true;

    setErrorMessage(dd, message, isValid);

};

function checkMonth(mm) {
    var isValid = false;
    var message;



    if (mm.value == "") {

        message = "This field is required";

    } else if (mm.value > 12 || mm.value < 1) {
        message = "must be a valid month";
    }
    else
        isValid = true;


    setErrorMessage(mm, message, isValid);

};

function checkYear(yyyy) {
    var isValid = false;
    var message;
    var cY = new Date().getFullYear();



    if (yyyy.value == "") {

        message = "This field is required";

    } else if (yyyy.value > cY || yyyy.value < 1) {
        message = "must be in the past ";
    }
    else
        isValid = true;


    setErrorMessage(yyyy, message, isValid);

};





Submit.addEventListener("click", function (event) {
    event.preventDefault();
    checkDate(dd);
    checkMonth(mm);
    checkYear(yyyy);









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

function calculateAge(birthDate) {
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