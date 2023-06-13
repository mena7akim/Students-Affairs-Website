//retrieve all document elements
form = document.getElementById("form");
nam = document.getElementById("name");
email = document.getElementById("email");
id = document.getElementById("id");
gpa = document.getElementById("gpa");
number = document.getElementById("number");
date = document.getElementById("date");
level = document.getElementById("level");
depart = document.getElementById("department");
gender = document.getElementsByName("Gender");
stat = document.getElementsByName("status");
popup = document.getElementById("popup");
btn = document.getElementById("sub-btn");



document.getElementById("sub-btn").onclick = function (e) {
  const idValue = id.value.trim();
  const emailValue = email.value.trim();
  const numberValue = number.value.trim();
  const usernameValue = nam.value.trim();
  const gpaValue = gpa.value.trim();
  const dateValue = date.value.trim();
  const levelValue = level.value.trim();
  const departValue = depart.value.trim();
  let genderValue = "";
  if (gender[0].checked) genderValue = gender[0].value.trim();
  else genderValue = gender[1].value.trim();
  let statusValue = "";
  if (stat[0].checked) statusValue = stat[0].value.trim();
  else statusValue = stat[1].value.trim();

  validateInputs();
  e.preventDefault();
  if (
    isValidEmail(emailValue) &&
    isValidGpa(gpaValue) &&
    isValidName(usernameValue) &&
    isValidID(idValue) &&
    isValidNumber(numberValue) &&
    isValidGender() &&
    isValidStatus() &&
    isValidDate(dateValue)
  ) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/Exist/?ID=" + idValue + "&Email=" + emailValue, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const existsID = response.existsID;
        const existsEmail = response.existsEmail;

        if (existsID) {
          setError(id, "ID already exists");
        } else {
          setSuccess(id);
        }

        if (existsEmail) {
          setError(email, "Email already exists");
        } else if(!existsID){
          setSuccess(email);
          // Continue with form submission
          toggle();
          openPopup();
          document.getElementById("popup-btn").onclick = function () {
            form.submit();
            closePopup();
          };
        }
      }
    };
    xhr.send();
  }
};

//input validating functions
isValidStatus = function () {
  return stat[0].checked || stat[1].checked;
};
isValidGender = function () {
  return gender[0].checked || gender[1].checked;
};

isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
isValidName = (userName) => {
  return /^[a-zA-Z ]+$/.test(userName);
};
isValidDate = (date) => {
  return String(date) != "";
};

isValidNumber = (number) => {
  const re = /^(01)[1205]\d{8}$/;
  return re.test(String(number));
};

isValidGpa = (gpa) => {
  return gpa <= 4 && gpa >= 0;
};

isValidID = (id) => {
  const re = /^\d+$/;
  return re.test(String(id));
};

//this function displays error message and display fields in red border according to some validations
setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
//this function removes display fields in green border for validated inputs
setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

//Validate inputs fields
validateInputs = () => {
  const idValue = id.value.trim();
  const emailValue = email.value.trim();
  const numberValue = number.value.trim();
  const usernameValue = nam.value.trim();
  const gpaValue = gpa.value.trim();
  const dateValue = date.value;
  let genderValue = "";
  if (gender[0].checked) genderValue = gender[0].value.trim();
  else genderValue = gender[1].value.trim();
  let statusValue = "";
  if (stat[0].checked) statusValue = stat[0].value.trim();
  else statusValue = stat[1].value.trim();

 if (idValue === "") {
    setError(id, "ID is required");
  } else if (!isValidID(idValue)) {
    setError(id, "id must only contain numbers");
  } else {
    setSuccess(id);
  }

  if (usernameValue === "") {
    setError(nam, "Username is required");
  } else if (!isValidName(usernameValue)) {
    setError(nam, "Name must only contain letters");
  } else {
    setSuccess(nam);
  }

  if (dateValue === "") setError(date, "Date is required");
  else setSuccess(date);

  if (gpaValue === "") {
    setError(gpa, "GPA is required");
  } else if (!isValidGpa(gpaValue)) {
    setError(gpa, "Gpa must be between 4 and 0 included");
  } else {
    setSuccess(gpa);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (numberValue === "") {
    setError(number, "Mobile Number is required");
  } else if (!isValidNumber(numberValue)) {
    setError(number, "Provide a valid mobile number");
  } else {
    setSuccess(number);
  }

  if (!(gender[0].checked || gender[1].checked)) {
    setError(gender[0], "required to choose option");
  } else {
    setSuccess(gender[0]);
  }

  if (!(stat[0].checked || stat[1].checked)) {
    setError(stat[0], "required to choose option");
  } else {
    setSuccess(stat[0]);
  }
};
//Processing popup message
function openPopup() {
  document.getElementById("sub-btn").disabled = true;
  popup.classList.add("open-popup");
}

function closePopup() {
  document.getElementById("sub-btn").disabled = false;
  popup.classList.remove("open-popup");
}

function toggle() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
}