const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
// const { Collection } = require("mongoose");

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended :true}))
app.use(cors())

app.get("/",cors(),(req,res)=>{

})
/*

mongodb+srv://Aayush:Ranchilpu2022@cluster0.zgbk6yj.mongodb.net/
*/


app.post("/",async(req,res)=>{
    const{userid,password} = req.body
    try{
        const check = await collection.findOne({userid:userid})

        if(check){
            res.json("exist")
        }else{
            res.json("not exist")
        }

    }catch(e){
        // console.log(e);
        res.json("fail")
    }
})
//signup


app.post("/signup",async(req,res)=>{
    const{userid,password} = req.body
    const data={
        userid:userid,
        password:password
    }
    try{
        const check = await collection.findOne({userid:userid})
        if(check){
            res.json("exist")
        }else{
            res.json("not exist")
            await collection.insertMany([data])
        }

    }catch(e){
        // console.log(e);
        res.json("failed")
    }
})
app.listen(8000,()=>{
    console.log("Port connected");
})
///////////////////////////
