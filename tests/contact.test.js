
const { contact } = require("../client/JS/contact");
global.fetch = require("jest-fetch-mock")

const fs = require("fs");
window.document.body.innerHTML = fs.readFileSync("./client/HTML/contact.html")


describe("enquiryButton", () => {
    test("should display thank you message when enquiry input is not empty", () => {
      // Set the value of enquiryInput and trigger the button click
      enquiryInput.value = "test enquiry";
      enquiryButton.click();
  
      // Check that the expected alert message was displayed
      expect(window.alert).toHaveBeenCalledWith(
        "Thank you for your enquiry, we will contact you soon!"
      );
    });
  
    test("should display error message when enquiry input is empty", () => {
      // Set the value of enquiryInput to an empty string and trigger the button click
      enquiryInput.value = "";
      enquiryButton.click();
  
      // Check that the expected alert message was displayed
      expect(window.alert).toHaveBeenCalledWith("Please write an enquiry!");
    });
  });
