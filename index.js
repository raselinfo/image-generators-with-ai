require("dotenv").config()
const express = require('express')
const path=require("path")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/v1", require("./routes/open-ai.routes"))

// Serve static file
app.use(express.static(path.join(__dirname, "public")))

app.get("/api/v1/health", (_req,res) => {
  res.send({message:"OK"})
})



app.listen(4000,()=>{
  console.log("http://localhost:4000")
})