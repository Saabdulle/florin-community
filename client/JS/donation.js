function donationPage() {
    window.location="http://127.0.0.1:5500/client/HTML/donation.html"
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
console.log("fds")
