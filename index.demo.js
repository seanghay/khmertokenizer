/**
 * Basic Khmer Tokenizer returns an array
 * @param {string} str
 */
function* _tokenizeAsIterator(str) {
  const CONSONANT_REGEX = /[\u1780-\u17b5]/
  const KHMER_REGEX = /[\u1780-\u17ff]/
  const VOWEL_REGEX = /[\u17b6-\u17d3]/
  const SIGN_COENG = "\u17d2"

  let pos = 0;
  let cur = "";

  while (pos < str.length) {
    let c = str[pos];
    if (KHMER_REGEX.test(c)) {
      if (CONSONANT_REGEX.test(c)) {
        const t = cur[cur.length - 1] === SIGN_COENG;
        if (cur && !t) yield cur;
        if (t) cur += c;
        else cur = c;
      } else {
        if (VOWEL_REGEX.test(c) && cur && CONSONANT_REGEX.test(cur[0]) && cur[cur.length - 1] !== c) {
          cur += c;
        } else {
          if (cur) yield cur;
          cur = ""
          yield c;
        }
      }
    } else {
      if (cur) yield cur;
      cur = "";
      yield c
    }

    pos++;
  }
  if (cur) yield cur;
}

/**
 * Basic Khmer Tokenizer and returns an array
 * @param {string} str
 */
function tokenize(str) {
  return Array.from(_tokenizeAsIterator(str))
}

/**
 * Check if Khmer Grapheme in invalid
 * @param {string} str
 * @returns {boolean}
 */
function isInvalidKhmerGrapheme(str) {
  if (!/[\u1780-\u17ff]/.test(str)) return false;
  if (/[\u17e0-\u17e9\u17D4-\u17DC\u17F0-\u17F9]/.test(str)) return false;
  return !/[\u1780-\u17b5]([\u17D2\u17B6-\u17D1\u17D3\u17DD])*/.test(str)
}

const $tokens = document.querySelector("#tokens");

document.querySelector("#text").addEventListener('input', (e) => {
  const tokens = tokenize(e.target.value);
  $tokens.innerHTML = tokens
    .map(token => isInvalidKhmerGrapheme(token) ?
      `<span class="token invalid">${token}</span>` :
      `<span class=token>${token}</span>`)
    .join("")
})