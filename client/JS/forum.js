const threadList = document.getElementById("threads");
const removeTokenFromLocalStorage = () => {
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("username")
    window.location.assign("welcome.html");
    alert("Logged Out!")
  }

async function getThreads() {
    const res = await fetch("/threads");
    const data = await res.json();
    // console.log(window.location.host)
    console.log(data);
    data.forEach(t => makeThreadCard(t));
}

function makeThreadCard(t){
    //title h3, body link?, user_id, date
    const card = document.createElement("div");
    card.classList.add("thread-card");
    card.id = "t"+t.id;
    card.onclick = function(){
        window.location.href = `../HTML/posts.html?thread=${t.id}`
    }

    const title = document.createElement("h3");
    title.innerText = t.title;
    title.classList.add("thread-title");

    const body = document.createElement("p");
    body.innerText = t.body;
    body.classList.add("thread-body");

    const data = document.createElement("div");
    const user = document.createElement("p");
    user.innerText = t.user_id; // get username here
    const date = document.createElement("p");
    date.innerText = (new Date(t.date)).toLocaleString("en-GB");
    data.classList.add("thread-data");
    data.appendChild(user);
    data.appendChild(date);

    card.appendChild(title);
    card.appendChild(body);
    card.appendChild(data);

    threadList.appendChild(card);
}

document.getElementById("create-thread").addEventListener("submit", async (e)=>{
    e.preventDefault();

    const form = new FormData(e.target);
    const currentUsername = localStorage.getItem("username");
    const options = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: currentUsername,
            thread_title: form.get("title"),
            thread_body: form.get("body")
        })
    }
    const result = await fetch("/threads", options);
    if (result.status==201) window.location.reload();
})

getThreads()

const logOut = document.querySelector("#logout")
logOut.addEventListener("click", (e) => {
    e.preventDefault()
    removeTokenFromLocalStorage()
    
  })
function donationPage() {
    window.location="../HTML/donation.html"
}
function changeTheme() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }
