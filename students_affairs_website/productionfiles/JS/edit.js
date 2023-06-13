document.getElementById("update_form").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const id = document.getElementById("ID").value;
    const date = document.getElementById("date").value;
    const myGPA = document.getElementById("GPA").value;
    const email = document.getElementById("E").value;
    const phone = document.getElementById("phone").value;
    const level = document.getElementById("level").value;
    
    let genderValue = "male";
    if (document.getElementById("female").checked) genderValue = "female";

    let stat_Value = "active";
    if (document.getElementById("inactive").checked) stat_Value = "inactive";
    let flag = true;
    if (name == "" || email == "" || phone == "") {
      alert("Please fill in all fields.");
      console.log("ERORR");
      flag = false;
      return false;
    }

    var nameRegex = /^[a-zA-Z ]+$/;
    if (!nameRegex.test(name)) {
      alert("Please enter a valid name.");
      console.log("ERORR");
      flag = false;
      return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      console.log("ERORR");
      flag = false;
      return false;
    }

    // Check if the phone number is valid
    var phoneRegex = /^\d{11}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number.");
      console.log("ERORR");
      flag = false;
      return false;
    }

    if (flag == true) {
      alert("Information updated successfully.");
      console.log("SUCCESS");
      document.getElementById("update_form").submit();
    }
  });

function deleteFunc(studentID){
    console.log(studentID);
    let ok = confirm("Are you sure you want to delete this student?");
    if (ok) {
        window.location.href = '/delete/' + studentID;
    }
}