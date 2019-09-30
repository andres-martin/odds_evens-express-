# first-express-app

Mi primera aplicación100 puntos

!Hola Maker!

En este reto vas a crear tu primera aplicación utilizando [Node.js](https://nodejs.org/) y [Express](https://expressjs.com/).

Lo primero que debes hacer es crear una nueva carpeta:

$ mkdir primera-app-express
$ cd primera-app-express

Ahora crea el archivo `package.json` con el siguiente comando:

$ npm init --yes

Instala la librería [Express](https://expressjs.com/) con el siguiente comando:

$ npm install --save express

Crea un nuevo archivo `app.js` con el siguiente contenido:

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hola Mundo</h1>');
});

app.listen(3000, () => console.log('Listening on port 3000!'));

**Nota:** Es importante siempre ejecutar el servidor en el puerto 3000 para que el evaluador funcione.

Ejecútalo con el siguiente comando:

$ node app.js

Ingresa a <http://localhost:3000/> desde cualquier navegador. Te debería aparecer un título con el texto "Hola Mundo".

Puedes detener el servidor oprimiendo `Ctrl+C` en la línea de comandos.

Crea el repositorio de Git, haz el commit y publícalo en un repositorio de Github.

Por último, ingresa tu solución y oprime "Evaluar Solución".
# odds_evens-express-
