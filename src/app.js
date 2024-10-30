const express=require("express")

const app=express()

app.use("/hello/hello",(req,res)=>{
    res.send("hello hello form server")
})
app.use("/test",(req,res)=>{
    res.send("hello form server")
})

app.use("/hello",(req,res)=>{
    res.send("hello hello helllo")
})

app.listen(7777,()=>{
    console.log("server is running at port 7777....")
})