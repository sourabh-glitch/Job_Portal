import express from "express"
import {createrecruiter,getrecruiter } from "../controllers/recruiterController.js"

const router = express.Router();


// POST - Add recruiter
router.post("/recruiters", createrecruiter);

// GET - Get all recruiters
router.get("/recruiters", getrecruiter);

export default router;
