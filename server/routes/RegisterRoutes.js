import express from 'express';
import { RegisterModel } from '../models/RegisterModel.js'

const router = new express.Router();

router.post("/", async (req, res) => {
    const user = new RegisterModel(req.body);
    console.log(user);

    try {
        const result = await user.save();
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});

export { router as registerRoutes }