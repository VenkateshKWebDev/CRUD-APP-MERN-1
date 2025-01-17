import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";
const app=express();
// app.use(express.json());
app.use(bodyParser.json());

app.use(cors());
dotenv.config();
const PORT=process.env.PORT||7000;
const URL=process.env.URL;

mongoose.connect(URL).then(()=>{

    console.log("DB connected Successfully!!");
    app.listen(PORT,()=>{
    
        console.log(`Hello from backend api and port is Running On ${PORT}`);
    })
}).catch(error=>console.log(error))

app.get('/',(req,res)=>{
    res.send("Hello Guys!!")
})

app.post('/api/users', (req, res) => {
    // req.body contains the parsed JSON payload
    console.log(req.body);
    res.json({ message: 'User created successfully' });
  });

app.use('/api',route)