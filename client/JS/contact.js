const enquiryButton = document.querySelector("#submit-enquiry");
const enquiryInput = document.querySelector("#textarea1");
enquiryButton.addEventListener("click", ()=>{
    if (enquiryInput.value != ""){
    alert("Thank you for your enquiry, we will contact you soon!");
    location.reload()
} else {
    alert("Please write an enquiry!")
}
    
});
const feedbackButton = document.querySelector("#submit-feedback");
const feedbackInput = document.querySelector("#feedback");
feedbackButton.addEventListener("click", ()=>{
    if (feedbackInput.value != ""){
        str = feedback.value
    alert("Thank you for your feedback.");
    location.reload()
} else {
    alert("Please write feedback before submitting!")
}
    
});
