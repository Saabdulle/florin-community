const { scrollToElement, scrollToInitiatives, scrollToVolunteer } = require("./welcomeFunctions.js");
global.fetch = require("jest-fetch-mock")

const fs = require("fs");
window.document.body.innerHTML = fs.readFileSync("../client/HTML/welcome.html")


describe("Testing scrollToElement", () => {


    it("gets the element using the DOM", () => {
        const element = document.getElementById("content");
        expect(element).not.toBe(null)
    })

})
