document.addEventListener("DOMContentLoaded", () => {
  const currDate = document.getElementById("currDate");
  const dateOfBirth = document.getElementById("DOB");
  const CalcAge = document.getElementById("CalcAge");
  const displayAge = document.getElementById("displayAge");
  const Age = document.getElementById("age");

  // Display today's date
  const today = new Date();
  currDate.innerText = `Today's Date is: ${today.toLocaleDateString('en-US')}`;

  // Calculate age on button click
  CalcAge.addEventListener("click", () => {
    // Reset previous message
    displayAge.classList.remove("visible");
    Age.innerText = "";

    if (!dateOfBirth.value) {
      Age.innerText = "⚠️ Please enter your date of birth.";
      displayAge.classList.add("visible");
      return;
    }
    const birthDate = new Date(dateOfBirth.value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    Age.innerText = `You are ${age} years old.`;
    displayAge.classList.add("visible");
  });
});
