const numPosts = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => data.length);

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

document.getElementById("randomBtn").addEventListener("click", async () => {
  const id = Math.floor(Math.random() * (await numPosts)) + 1;
  document.getElementById("idInput").value = id;
  document.getElementById("loadBtn").click();
});
