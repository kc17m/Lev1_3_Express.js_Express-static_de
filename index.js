const express = require("express")
const PORT = 9004

const app = express()

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
    console.log("ReqURL:", req.url)
})
app.get("/solutions", (req, res) => {
    res.sendFile(__dirname + "/public/solutions.html")
    console.log("ReqURL:", req.url)
})
app.get("/community", (req, res) => {
    res.sendFile(__dirname + "/public/community.html")
    console.log("ReqURL:", req.url)
})


app.use((_, res) => {
    res.status(404)
    res.sendFile(__dirname + "/public/error.html")


})



app.listen(PORT, () => console.log("server listening on port", PORT))

