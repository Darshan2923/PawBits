import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { contactRoutes } from './routes/ContactRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use("/contacts", contactRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/PawBits");

app.listen(5002, () => console.log("server is running"));