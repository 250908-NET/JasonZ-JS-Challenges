async function loadPosts() {
  let posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  posts.slice(0, 5).forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
    document.getElementById("output").appendChild(postDiv);
  });
}

document.getElementById("loadBtn").addEventListener("click", loadPosts);
