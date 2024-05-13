import express from 'express'
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from "@apollo/server/express4"
import bodyParser from 'body-parser'
import cors from 'cors'
async function starter(){

    const app = express()
    const PORT = Number(process.env.PORT) || 8000;
    const gqlServer = new ApolloServer({
        typeDefs:``,
        resolvers:{}
    } )    
    
   
    app.use(bodyParser.json())
    app.use(cors())

    await gqlServer.start()
    
    app.use("/gqlapi", expressMiddleware(gqlServer))

    app.get("/", (req, res)=>{
        res.json({ message:"server is running at / route"})
    })
    
    app.listen(PORT, ()=>{
        console.log(`server is running at port ${PORT}`)
    })

}

starter()