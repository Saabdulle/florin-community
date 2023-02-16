const threadList = document.getElementById("threads");

async function getThreads() {
    const res = await fetch("http://localhost:3000/threads");
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
    card.onclick = function(){getPosts(t.id);}

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

async function getPosts(id){
    const res = await fetch(`http://localhost:3000/posts/${id}`);
    const data = await res.json();
    // console.log(window.location.host)
    console.log(data);
    // data.forEach(t => makePostCard(t));
}

getThreads()