const express = require("express")
const UserModel = require("../Model/UserModel")

const UserRoute = express.Router()

UserRoute.get("/", async (req, res) => {
    let obj = {}
    let { name } = req.query
    if (name) {
        obj.name = name
    }

    try {
        let data = await UserModel.find(obj)
        res.status(200).send({ "msg": "success", "data": data })
    }
    catch (err) {
        res.status(401).send({ "error": err })
    }
})


UserRoute.post("/add", async (req, res) => {
    try {
        let data = new UserModel(req.body)
        await data.save()
        res.status(200).send({ "msg": "success", "data": data })
    }
    catch (err) {
        res.status(401).send({ "error": err })
    }
})

UserRoute.patch("/update/:id", async (req, res) => {
    let { id } = req.params
    try {
        let data = await UserModel.findOneAndUpdate({ _id: id }, { ...req.body })
        res.status(200).send({ "msg": "success", "data": data })
    }
    catch (err) {
        res.status(401).send({ "error": err })
    }
})

UserRoute.delete("/delete/:id", async (req, res) => {
    let { id } = req.params
    try {
        let data = await UserModel.findOneAndDelete({ _id: id })
        res.status(200).send({ "msg": "success", "data": data })
    }
    catch (err) {
        res.status(401).send({ "error": err })
    }
})

UserRoute.patch("/bookslot/:id", async (req, res) => {
    let { id } = req.params
    try {
        let data = await UserModel.findOne({ _id: id })
        data.booked_slots.push({ date: req?.body?.date, time: req?.body?.time })
        await UserModel.findOneAndUpdate({ _id: id }, { booked_slots: data.booked_slots })
        res.status(200).send({ "msg": "success", "data": data })
    }
    catch (err) {
        res.status(401).send({ "error": `${err}` })
    }
})

module.exports = UserRoute