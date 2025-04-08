import express from "express"
import cors from "cors"

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


import userRouter from "./routes/userRoute.js"

app.use("/api/v1/users", userRouter);

export default app;