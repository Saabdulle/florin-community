const id = (new URLSearchParams(window.location.search)).get("thread");
if (id == null) { window.location.href = "/HTML/forum.html" }

const container = document.querySelector("#all-posts");

const getData = async () => {
    const response = await fetch(`/posts/${id}`);
    const data = await response.json();
    console.log(data);
    data.forEach(d => {
        const elem = createPostElement(d);
        container.appendChild(elem);

    })

}
function createPostElement(data) {
    const post = document.createElement("div");
    post.className = "post";

    const header = document.createElement("h2");
    header.textContent = "title: " + data["title"];
    post.appendChild(header);

    const content = document.createElement("p");
    content.textContent = "Post: " + data["post_body"];
    post.appendChild(content);

    const user = document.createElement("p");
    user.textContent = "User ID: " + data["user_id"];
    post.appendChild(user);

    const date = document.createElement("p");
    date.textContent = "Date Created: " + data["post_date"];
    post.appendChild(date);



    console.log(post);
    return post;
}

getData()

document.getElementById("post-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const currentUsername = localStorage.getItem("username");
    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            thread_id: id,
            username: currentUsername,
            post_title: form.get("title"),
            post_body: form.get("postBody")
        })
    }
    const result = await fetch("/posts", options);

    if (result.status == 201) {
        window.location.reload();
    }
})

function donationPage() {
    window.location="../HTML/donation.html"
}
