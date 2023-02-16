
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

if (typeof exports !== 'undefined') {
module.exports = {
    scrollToElement,
    scrollToInitiatives,
    scrollToVolunteer
  }
}
