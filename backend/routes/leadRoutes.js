import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getLeads, createLead, updateLead, deleteLead } from "../controllers/leadController.js";

const router = express.Router();

router.route("/").get(protect, getLeads).post(protect, createLead);
router.route("/:id").put(protect, updateLead).delete(protect, deleteLead);

export default router;
