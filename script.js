const API = 'https://api.adviceslip.com/advice';
const advice = document.getElementById('advice');
function getAdvice(url) {
  advice.innerHTML = '';
  fetch(url).then(res => res.json()).then(data => {
    advice.innerHTML = `
      <p class='id'>ADVICE #${data.slip.id}</p>
      <div class='wrapp'><p class='advice'>${data.slip.advice}</p></div>
      <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>

    `
  })
}

getAdvice(API)
