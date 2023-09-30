const fs = require("fs")
let { readFileSync } = require('fs');

module.exports = {
  name: "/",
  run: async (req, res) => {
    delete require.cache[require.resolve("../html/home.html")]

    let file = readFileSync("./web/html/home.html", { encoding: "utf8" })

    res.send(file)
    
  }
}