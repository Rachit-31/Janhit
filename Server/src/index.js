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
.then(() => {
  const PORT = process.env.PORT || 8000; 
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error("MongoDB connection failed", err);
});
