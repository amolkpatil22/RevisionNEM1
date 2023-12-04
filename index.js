const express = require("express")
const app = express()
const cors = require("cors")
const { connection } = require("./db/db")

app.use(cors)
app.use(express.json())

app.get("/", (req, res) => {
    res.send("working")
})

app.listen(8080, async () => {
    try {
        await connection
        console.log("Connected to the server")
    }
    catch (err) {
        console.log(err)
    }
})