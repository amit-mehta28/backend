import express from "express";
import sequelize from "./db/index.js";
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("hello Amit !")
})

app.listen(port,()=>{
    console.log(`App Listning on port ${port}`);
})  