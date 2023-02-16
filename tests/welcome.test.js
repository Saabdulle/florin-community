const { scrollToElement, scrollToInitiatives, scrollToVolunteer } = require("./welcomeFunctions.js");
global.fetch = require("jest-fetch-mock")

const fs = require("fs");
window.document.body.innerHTML = fs.readFileSync("./client/HTML/welcome.html")


describe("Testing scrollToElement", () => {


    it("gets the element using the DOM", () => {
        const element = document.getElementById("content");
        scrollToElement()
        expect(element).not.toBe(null)
    })

})

describe("Testing scrollToInitiatives", () => {


    it("gets the element using the DOM", () => {
        const element = document.getElementById("initiatives");
        scrollToInitiatives()
        expect(element).not.toBe(null)
    })

})


describe("Testing scrollToVolunteer", () => {


    it("gets the element using the DOM", () => {
        const element = document.getElementById("volunteer");
        scrollToVolunteer()
        expect(element).not.toBe(null)
    })

})
