// const swapBtn = document.querySelector("#swap-btn")

// swapBtn.addEventListener("click", swapTheme);

// function swapTheme(){
//     const swapElement = document.body;
//     if (swapElement.classList.value != "lightTheme") {
//         swapElement.removeAttribute("class")
//         swapElement.classList.toggle("darkTheme")
//     } else if (swapElement.classList.value == "darkTheme") {
//         swapElement.removeAttribute("class")
//         swapElement.classList.toggle("lightTheme")
//     }
// }
function changeTheme() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }
