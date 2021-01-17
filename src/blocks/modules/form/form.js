const form = document.querySelector('#form');
const url = 'https://jsonplaceholder.typicode.com/posts';

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(e.target);

  fetch(url, {
    method: 'POST',
    body: new URLSearchParams(data),
  });
});
