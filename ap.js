const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const array = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      array.push(`<p>${i} Soy Par!</p>`);
    } else {
      array.push(`<p>${i} Soy Impar!</p>`);
    }
  }
  res.send(array.join('\n'));
});

app.listen(3000, () => console.log('Listening on port 3000!'));
