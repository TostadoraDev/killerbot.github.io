const express = require("express")
const app = express()

app.enable("trust proxy")
app.set("etag", false)
app.use(express.static("./web"))

let files = fs.readdirSync("./web/public").filter(f => f.endsWith(".js"))
files.forEach(f => {
    const file = require(`./web/public/${f}`)

    app.get(file.name, file.run)

})

app.listen(4046)