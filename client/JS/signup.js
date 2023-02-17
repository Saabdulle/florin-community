// require("dotenv").config();
// const port = process.env.PORT || 3000;

document.getElementById("signup-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const items = {
        username: form.get("username"),
        email: form.get("email"),
        password: form.get("password"),
        repeat: form.get("repeat-password")
    }
    if(items.password != items.repeat){
        alert("Passwords do not match!");
        return;
    }

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(items)
    }
    console.log(options);

    const response = await fetch(`/users/register`, options);
    const data = await response.json();

    if (response.status==201){
        alert("Registered");
        window.location.assign("signin.html");
    } else {
        console.log(data.error);
    }
})

function donationPage() {
    window.location="../HTML/donation.html"
}
function changeTheme() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }
