const express = require('express');
require('./config')
const users = require('./user')
const app = express();
app.use(express.json());
app.post("/create",async (req,res)=> {
    let data = new users(req.body);
    let result = await data.save();
    res.send(result);
    console.log(req.body);
});

app.get("/list", async (req,res)=> {
    let data = await users.find();
    res.send(data);
});
app.delete("/delete/:_id", async (req,res)=> {
    console.log(req.params);
    let data = await users.deleteOne(req.params);
    res.send(data);
});
app.put("/update/:_id", async (req,res)=> {
    console.log(req.params);
    let data = await users.updateOne(
        req.params,
    {
        $set: req.body
    }
);
    res.send(data);
});

app.listen(5000);