form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const id = document.getElementById("Student ID").value;
    const date = document.getElementById("Date").value;
    const myGPA = document.getElementById("GPA").value;
    const email = document.getElementById("E").value;
    const phone = document.getElementById("pn").value;
    const dep = document.getElementById("DP").value;
    const level = document.getElementById("level").value;
    const gender = document.getElementById("gender").value;

    if (gender[0].checked) genderValue = gender[0].value;
    else genderValue = gender[1].value;

    let stat_Value = "";
    if (status[0].checked) stat_Value = status[0].value;
    else stat_Value = status[1].value;

    if (name == "" || email == "" || phone == "") {
      alert("Please fill in all fields.");
      flag = false;
      return false;
    }

    var nameRegex = /^[a-zA-Z ]+$/;
    if (!nameRegex.test(name)) {
      alert("Please enter a valid name.");
      flag = false;
      return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      flag = false;
      return false;
    }

    // Check if the phone number is valid
    var phoneRegex = /^\d{11}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number.");
      flag = false;
      return false;
    }

    if (flag == true) {

      student.save();
      confirm("Information updated successfully.");
      window.location.href = "HOME.html";
    }
  });