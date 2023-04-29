import { tokenize, isInvalidKhmerGrapheme } from './index.js'

const $tokens = document.querySelector("#tokens");

document.querySelector("#text").addEventListener('input', (e) => {
  const tokens = tokenize(e.target.value);
  $tokens.innerHTML = tokens
    .map(token => isInvalidKhmerGrapheme(token) ?
      `<span class="token invalid">${token}</span>` :
      `<span class=token>${token}</span>`)
    .join("")
})