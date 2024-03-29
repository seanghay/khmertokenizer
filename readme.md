## Khmer Tokenizer

A fast Khmer text tokenizer that ensures all characters are included in the process.

[Web demo](https://khmertokenizer.netlify.app/)

```js
import { tokenize } from 'khmertokenizer';

tokenize("ភាសាខ្មែរ១២ 123 ABC")
// => ["ភា","សា","ខ្មែ","រ","១","២"," ","1","2","3"," ","A","B","C"]
```

### Iterator

```js
import { tokenizeAsIterator } from 'khmertokenizer';

for (const c of tokenizeAsIterator("ភាសាខ្មែរ១២ 123 ABC")) {
  console.log(c);
}
```

### Grapheme Validation

```js
import { tokenize, isInvalidKhmerGrapheme } from 'khmertokenizer';

const input = "ភាសាខ្មែរ១២ 123 ABC ២ ៗាា"
const output = tokenize(input)
  .filter(c => !isInvalidKhmerGrapheme(c)) // remove invalid graphemes
  .join("")

//=> "ភាសាខ្មែរ១២ 123 ABC ២ ៗ"
```
