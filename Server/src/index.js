import dotenv from "dotenv"
import app from './app.js'
import connectDB from "./db/connectTomongoDb.js"

dotenv.config({
    path:'./env'
})

app.get('/', (req, res)=>{
    res.send("server is running")
})

connectDB()
.then(()=>{
  app.listen(8000, ()=>{
    console.log(`Server is running on port 8000`);
  })
})
.catch((err) => {
  console.log("MongoDb connection failed", err)
})