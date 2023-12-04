const express = require("express")
const app = express()
const cors = require("cors")
const { connection } = require("./db/db")
const UserRoute = require("./Routes/UserRoutes")

app.use(cors())
app.use(express.json())

app.use("/contacts", UserRoute)

app.listen(8080, async () => {
    try {
        await connection
        console.log("Connected to the server")
    }
    catch (err) {
        console.log(err)
    }
})