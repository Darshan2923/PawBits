import express from 'express';
import { contactModel } from '../models/ContactModel.js';

const router = new express.Router();

router.post("/", async (req, res) => {
    const contact = new contactModel(req.body);
    console.log(contact);

    try {
        const result = await contact.save();
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});

export { router as contactRoutes }