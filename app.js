const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`La aplicación está corriendo en el puerto ${port}`);
});

app.enable("trust proxy")
app.set("etag", false)
app.use(express.static("./web"))

let files = fs.readdirSync("./web/public").filter(f => f.endsWith(".js"))
files.forEach(f => {
    const file = require(`./web/public/${f}`)

    app.get(file.name, file.run)

})

app.listen(4046)