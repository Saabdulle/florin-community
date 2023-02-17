const enquiryButton = document.querySelector("#submit-enquiry");
const enquiryInput = document.querySelector("#textarea1");
enquiryButton.addEventListener("click", ()=>{
    if (enquiryInput.value != ""){
    alert("Thank you for your enquiry, we will contact you soon!");
    location.reload()
} else {
    alert("Please write an enquiry before submitting!")
}
    
});
const feedbackButton = document.querySelector("#submit-feedback");
const feedbackInput = document.querySelector("#textarea2");
feedbackButton.addEventListener("click", ()=>{
    if (feedbackInput.value != ""){
        str = feedback.value
    alert("Thank you for your feedback.");
    location.reload()
} else {
    alert("Please write feedback before submitting!")
}
    
});
function donationPage() {
    window.location="../HTML/donation.html"
}
function changeTheme() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }
