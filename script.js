async function _loadPosts() {
  let posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .catch((error) => console.error("Error fetching data:", error));

  posts.slice(0, 5).forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
    document.getElementById("output").appendChild(postDiv);
  });
}

async function loadPost(id) {
  let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
    .catch((error) => console.error("Error fetching data:", error));

  const postDiv = document.createElement("div");
  postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
  document.getElementById("output").appendChild(postDiv);
}

document.getElementById("loadBtn").addEventListener("click", () => {
  const id = document.getElementById("idInput").value || 1;
  document.getElementById("output").innerHTML = "";
  loadPost(id);
});
