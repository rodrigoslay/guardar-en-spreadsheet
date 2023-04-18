// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Formulario de registro</h1>`;

const scriptURL = 'https://script.google.com/macros/s/AKfycbzbf3P5tHXEyz9yUUfwvoHYm1App6NUXl7dm1NQzbocddScrKc/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })