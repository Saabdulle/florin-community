

const volunteerForm = document.querySelector("#volunteer-input-form")
volunteerForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const userData = { 
    name: document.querySelector("#ans1").value,
    description: document.querySelector("#ans2").value,
    date: document.querySelector("#ans3").value,
    task_time: document.querySelector("#ans4").value,
    email: document.querySelector("#ans5").value,
  }

  const sendVolunteer = async () => {
    try {
      const data = await axios.post("/volunteers", userData)
      document.querySelector("#ans1").value = ""
      document.querySelector("#ans2").value = ""
      document.querySelector("#ans3").value = ""
      document.querySelector("#ans4").value = ""
      document.querySelector("#ans5").value = ""
    } catch (err) {
      console.log(err)
    }
  }
  sendVolunteer()
})



// Scrolls to div with the id of content on click
function scrollToElement() {
  const element = document.getElementById("content");
  element.scrollIntoView({ behavior: "smooth" });
}

// Scrolls to div with the id of initiatives on click
function scrollToInitiatives() {
  const element = document.getElementById("initiatives");
  element.scrollIntoView({ behavior: "smooth" });
}

// Scrolls to div with the id of volunteer on click
function scrollToVolunteer() {
  const element = document.getElementById("volunteer");
  element.scrollIntoView({ behavior: "smooth" });
}

//Automatic update on current date
document.querySelector('.start-date-class').value = new Date().toISOString().slice(0, 10);

//Automatic update of current time.
let time = new Date();
time.setUTCHours(time.getHours(), time.getMinutes(), time.getSeconds(), 0);
document.querySelector(".start-time-class").valueAsDate = time;

function donationPage() {
  window.location="../HTML/donation.html"
}

function changeTheme() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}
