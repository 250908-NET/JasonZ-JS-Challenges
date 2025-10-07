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
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      else return res;
    })
    .then((res) => res.json());

  const postDiv = document.createElement("div");
  postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
  return postDiv;
}

function createError(innerHTML) {
  const errorDiv = document.createElement("div");
  errorDiv.innerHTML = innerHTML;
  return errorDiv;
}

document.getElementById("loadBtn").addEventListener("click", async () => {
  const id = document.getElementById("idInput").value || 1;
  document.getElementById("idInput").value = "";

  document.getElementById("output").innerHTML = "";
  document.getElementById("output").appendChild(
    await loadPost(id).catch(() => {
      return createError(`<p>Post ${id} not found.</p>`);
    })
  );
});
