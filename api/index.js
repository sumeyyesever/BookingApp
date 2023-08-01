import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


const app = express();
dotenv.config();

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };

app.listen(3000, ()=>{
    connect();
    console.log("listening");
});

