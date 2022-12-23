const formDOM = document.querySelector(".form-input");
const inputDOM = document.querySelector(".user-input");
const submitDOM = document.querySelector(".submit-input");
const rowDOM = document.querySelector(".add-row"); // btn

const errorMessage = document.querySelector(".error");
let resultGPA = document.querySelector(".results-container");
let totalCredHrs = document.querySelector(".total-creds");

formDOM.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent Default Form Function
  const value = letterGradeInputDOM.value;
  console.log(value);
});

function computeSemesterGPA() {
  const letterGradeInputDOM = document.querySelectorAll(".letter-grade");
  const creditHours = document.querySelectorAll(".credit-hours");
  let sum = 0;
  let sumCred = 0;
  for (let i = 0; i < creditHours.length; i++) {
    if (
      creditHours[i].value === "" &&
      letterGradeInputDOM[i].value.toUpperCase() === ""
    ) {
      creditHours[i].value = "0.00"; // Parse Value to Float Later
      letterGradeInputDOM[i].value = "";
    }
    sum +=
      parseFloat(creditHours[i].value) *
      calcGradeScale(letterGradeInputDOM[i].value.toUpperCase());
    sumCred += parseFloat(creditHours[i].value);
  }
  let sumOfQualityPoints = (sum.toFixed(2) / sumCred).toFixed(2);

  resultGPA.innerHTML = `<h4>Current GPA For Semester: ${sumOfQualityPoints}</h4>
  <p>Total Credit Hours: ${sumCred}</p>`;
  return sumOfQualityPoints;
}
// SUBMIT
submitDOM.addEventListener("click", () => {
  computeSemesterGPA();
});

// ADD NEW ROW FUNCTIONALITY
rowDOM.addEventListener("click", () => {
  addRow();
});

// ADD ROWS
function addRow() {
  const inputContainer = document.createElement("div");
  inputContainer.setAttribute("class", "input-container");

  const inputClass = document.createElement("div");
  const inputHours = document.createElement("div");
  const inputLetterGrade = document.createElement("div");

  // Append To Form
  inputContainer.appendChild(createClass(inputClass));
  inputContainer.appendChild(createCreditHours(inputHours));
  inputContainer.appendChild(createLetterGrade(inputLetterGrade));

  //   Append New Element Block To Parent
  formDOM.appendChild(inputContainer);
}

const createClass = (classN) => {
  classN.setAttribute("class", "input-content");
  const classInput = document.createElement("input");
  classInput.setAttribute("class", "user-input class");
  classInput.setAttribute("placeholder", "Enter Class");
  classN.appendChild(classInput);
  return classN;
};
const createCreditHours = (hours) => {
  hours.setAttribute("class", "input-content");
  const creditHours = document.createElement("input");
  creditHours.setAttribute("class", "user-input credit-hours");
  creditHours.setAttribute("maxlength", "4");
  creditHours.setAttribute("placeholder", "---");
  creditHours.setAttribute("min", "0");
  hours.appendChild(creditHours);
  return hours;
};
const createLetterGrade = (letterG) => {
  letterG.setAttribute("class", "input-content");
  const letterGrade = document.createElement("input");
  letterGrade.setAttribute("type", "text");
  letterGrade.setAttribute("class", "user-input letter-grade");
  letterGrade.setAttribute("maxlength", "2");
  letterGrade.setAttribute("placeholder", "---");
  letterGrade.setAttribute("min", "0");
  letterG.appendChild(letterGrade);
  return letterG;
};

function displayErrorMessage() {
  errorMessage.textContent = "Error! Check Input Values And Try Again...";
  //   Quickly Alert User Of Input Error
  setTimeout(() => {
    clearErrorMessage();
  }, 1000);
}
function clearErrorMessage() {
  errorMessage.innerHTML = "";
}

// DETERMINE NUMERICAL GRADE VALUE
function calcGradeScale(charInput) {
  switch (charInput) {
    case "":
      charInput = "0.00";
      break;
    case "A+":
      charInput = "4.00";
      clearErrorMessage();
      break;
    case "A":
      charInput = "4.00";
      clearErrorMessage();
      break;
    case "A-":
      charInput = "3.67";
      clearErrorMessage();
      break;
    case "B+":
      charInput = "3.33";
      clearErrorMessage();
      break;
    case "B":
      charInput = "3.00";
      clearErrorMessage();
      break;
    case "B-":
      charInput = "2.67";
      clearErrorMessage();
      break;
    case "C+":
      charInput = "2.33";
      clearErrorMessage();
      break;
    case "C":
      charInput = "2.00";
      clearErrorMessage();
      break;
    case "C-":
      charInput = "1.67";
      clearErrorMessage();
      break;
    case "D+":
      charInput = "1.33";
      clearErrorMessage();
      break;
    case "D":
      charInput = "1.00";
      clearErrorMessage();
      break;
    case "D-":
      charInput = "0.67";
      clearErrorMessage();
      break;
    case "F":
      charInput = "0.00";
      clearErrorMessage();
      break;
    default:
      displayErrorMessage();
      break;
  }
  return parseFloat(charInput);
}
