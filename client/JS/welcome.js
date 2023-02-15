

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
      const data = await axios.post("http://localhost:3000/volunteer", userData)
      document.querySelector("#ans1").value = ""
      document.querySelector("#ans5").value = ""
    } catch (err) {
      console.log(err)
    }
  }
  sendVolunteer()
})


















// const form = document.getElementById('volunteer-input-form');
// const submitButton = document.getElementById('add-entry');

// submitButton.addEventListener('click', async (event) => {
//   event.preventDefault(); // prevent default form submission (prevents page refresh)

//   const formData = new FormData(form); // create a new FormData object with the form data
//   console.log(formData);

//   try {
//     const response = await fetch('http://localhost:3000/volunteer', {
//       method: 'POST',
//       body: formData
//     });

//     if (response.ok) {
//       alert('Form submission successful!');
//       form.reset(); // clear form after successful submission
//     } else {
//       throw new Error('Form submission failed.');
//     }
//   } catch (error) {
//     console.error(error);
//     alert('Form submission failed.');
//   }
// });




// let answer1 = document.getElementById("ans1");
// let answer2 = document.getElementById("ans2");
// let answer3 = document.getElementById("ans3");
// let answer4 = document.getElementById("ans4");
// let answer5 = document.getElementById("ans5");
// let answer6 = document.getElementById("ans6");
// let data = {};


// async function addData() {




//   data = {
//     'content': question.value,
//     'answer1': answer1.value,
//     'answer2': answer2.value,
//     'answer3': answer3.value,
//     'answer4': answer4.value,
//     'corAnswer': corAnswer.value,
//     'category': category.value,
//     'corIndex': parseInt(corIndex.value)
//   }

//   console.log(data)
//   const options = {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }

//   const response = await fetch("http://localhost:3000/volunteer", options)

//   if (response.status == 201) {
//     alert("list of flashcards has been successfully updated!!!")
//     location.reload();
//   } else {
//     alert("please fill in the form with the correct information")
//   }

// }






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

//Automatic update on current date
document.querySelector('.start-date-class').value = new Date().toISOString().slice(0, 10);

//Automatic update of current time.
let time = new Date();
time.setUTCHours(time.getHours(), time.getMinutes(), time.getSeconds(), 0);
document.querySelector(".start-time-class").valueAsDate = time;





