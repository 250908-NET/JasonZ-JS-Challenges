fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    console.log('Fetched post:', data);
  })
  .catch(error => console.error('Error fetching data:', error));
