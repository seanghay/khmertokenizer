const { tokenize, isInvalidKhmerGrapheme } = require("./index.js");
const assert = require("node:assert")

const inputStr = "Hello, World, 1234ភាសាខ្មែរខ្មែរាសឦដកាលកសលដមិន ស្ត្រីខ្មែរ 1 សដ 234567890-=[];'./,=-😂💀🇰🇭asdlkasdl!@#$%^&*()_+\\|?><:\"{}_+'សដាសដាលសកដលាកសដ ប្រាប់អ្នកណាក់ ៗាាា ផង"
const inputStrCorrect = "Hello, World, 1234ភាសាខ្មែរខ្មែរាសឦដកាលកសលដមិន ស្ត្រីខ្មែរ 1 សដ 234567890-=[];'./,=-😂💀🇰🇭asdlkasdl!@#$%^&*()_+\\|?><:\"{}_+'សដាសដាលសកដលាកសដ ប្រាប់អ្នកណាក់ ៗ ផង"

assert.strictEqual(tokenize(inputStr).join(""), inputStr)
assert.strictEqual(tokenize(inputStr)
  .filter(c => !isInvalidKhmerGrapheme(c)).join(""),
  inputStrCorrect
)
assert.deepEqual(tokenize("មានាាបើក់់ាតឺឺ"), [
  'មា', 'នា', 'ា',
  'បើ', 'ក់', '់',
  'ា', 'តឺ', 'ឺ'
])