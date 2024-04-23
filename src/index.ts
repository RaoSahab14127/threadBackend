import express from 'express'

const app = express()
const PORT = Number(process.env.PORT) || 8000;


app.get("/", (req, res)=>{
    res.json({ message:"server is running at / route"})
})

app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`)
})