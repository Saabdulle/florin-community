function donationPage() {
    window.location="../HTML/donation.html"
}
const donationButton = document.querySelector("#submit-btn");
// const feedbackInput = document.querySelector("#textarea2");
donationButton.addEventListener("click", ()=>{
    alert("Thank you for your donation!");
    location.reload()
// } else {
//     alert("Please write feedback before submitting!")
// }
    
});
function changeTheme() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }
