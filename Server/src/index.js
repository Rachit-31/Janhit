import dotenv from "dotenv";
import app from './app.js';
import connectDB from "./db/connectTomongoDb.js";

dotenv.config({ path: './env' });

app.get('/', (req, res) => {
  res.send("Server is running");
});


connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed:", err);
  });